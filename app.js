const express = require("express");
const app = express();
var multiparty = require("multiparty");
var fs = require("fs-extra");
app.use(express.static("public"));
const path = require("path");
const UPLOAD_DIR = path.resolve(__dirname);
const until = require("./until");
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
let FILE_NAME = "";
let chunkDir = "";
/* 上传 */
let requests = Array(6)
  .fill(0)
  .map((item, index) => index);
for (let i = 0; i < requests.length; i++) {
  console.log(requests[i]);
  app.post("/file/uploading" + requests[i], (req, res, next) => {
    /* 生成multiparty对象，并配置上传目标路径 */
    var form = new multiparty.Form();
    // console.log(res)
    form.parse(req, async (err, fields, files) => {
      // if(err) return;
      const [chunk] = files.chunk;
      const [hash] = fields.hash;
      const [fileName] = fields.fileName;
      const [index] = fields.index;
      FILE_NAME = fileName;
      chunkDir = path.resolve(UPLOAD_DIR, "fileSteam/fchunkDir" + fileName);

      // await fs.removeSync(chunkDir);
      if (!fs.existsSync(chunkDir)) {
        await fs.mkdirs(chunkDir);
      }

      await fs.move(chunk.path, `${chunkDir}/${hash}`);

      res.writeHead(200, { "content-type": "text/plain;charset=utf-8" });
      res.write(index);
      res.end();
    });
  });
}

// 合并chunk
app.post("/file/mergrChunk", async (req, res, next) => {
  FILE_NAME = path.resolve(UPLOAD_DIR, "fileSteam/" + FILE_NAME);
  console.log(FILE_NAME, "========================");
  let dests = fs.readdirSync(chunkDir);
  dests = dests.sort((a, b) => a - b);
  await WriteStreamsAsync(dests);
  await fs.removeSync(chunkDir);
  res.write("200");
  res.end();
});

const WriteStreamsAsync = async (dests) => {
  let writeable = fs.createWriteStream(FILE_NAME);
  for (let i = 0; i < dests.length; i++) {
    await write(dests[i], writeable);
  }
};

const write = (item, writeable) => {
  return new Promise((resolve, reject) => {
    let destPath = path.resolve(path.resolve(UPLOAD_DIR, chunkDir), item);
    let readable = fs.createReadStream(destPath);
    // 把chip 写入 new.txt中
    readable.pipe(writeable, { end: false });
    readable.on("end", () => {
      resolve();
      // 关闭流之前立即写入最后一个额外的数据块
    });
  });
};

app.use(express.static("public")).listen(1000);
