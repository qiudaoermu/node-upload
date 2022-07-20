const express = require("express");
const app = express();
app.use(express.static("public"));
const multiparty = require("multiparty");
const fs = require("fs-extra");

const path = require("path");


app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
let FILE_NAME = "";
let chunkDir = "";

app.post("/file/uploading", (req, res, next) => {
  /* 生成multiparty对象，并配置上传目标路径 */
  var form = new multiparty.Form();
  form.parse(req, async (err, fields, files) => {
    if(err) return;
    const [chunk] = files.chunk;
    const [hash] = fields.hash;
    const [fileName] = fields.fileName;
    FILE_NAME = fileName;
    chunkDir = path.resolve(__dirname, "fileSteam/chunkDir" + fileName);

    if (!fs.existsSync(chunkDir)) {
      await fs.mkdirs(chunkDir);
    }
    
    // 文件暂时放入 chunkDir文件夹中

    await fs.move(chunk.path, `${chunkDir}/${hash}`);

    res.writeHead(200, { "content-type": "text/plain;charset=utf-8" });
    res.write("200");
    res.end();
  });
});

// 合并chunk
const stream = require("./writeStream");

app.post("/file/mergrChunk", async (req, res, next) => {
  FILE_NAME = path.resolve(__dirname, "fileSteam/" + FILE_NAME);
  let dests = fs.readdirSync(chunkDir);
  dests = dests.sort((a, b) => a - b);
  await stream.WriteStreamsAsync(dests, FILE_NAME, chunkDir);
  await fs.removeSync(chunkDir);
  res.write("200");
  res.end();
});

app.use(express.static("public")).listen(1000);
