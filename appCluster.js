const express = require("express");

var multiparty = require("multiparty");
var fs = require("fs-extra");
const path = require("path");
const UPLOAD_DIR = path.resolve(__dirname);
const until = require("./writeStream");

var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

console.log("numCPUs is %o", numCPUs);

// 跨域设置
// app.all("*", function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   // res.setHeader("Access-Control-Allow-Origin", req.get("Origin")); // 添加这一行代码，代理配置不成功
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "POST, GET, OPTIONS, DELETE, PUT"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
//   );
//   next();
// });

let FILE_NAME = "";
let chunkDir = "";
/* 上传 */
// let requests = Array(6)
//   .fill(0)
//   .map((item, index) => index);
// for (let i = 0; i < requests.length; i++) {
//   console.log(requests[i]);
//   app.post("/file/uploading" + requests[i], (req, res, next) => {
//     /* 生成multiparty对象，并配置上传目标路径 */
//     var form = new multiparty.Form();
//     // console.log(res)
//     form.parse(req, async (err, fields, files) => {
//       // if(err) return;
//       const [chunk] = files.chunk;
//       const [hash] = fields.hash;
//       const [fileName] = fields.fileName;
//       const [index] = fields.index;
//       FILE_NAME = fileName;
//       chunkDir = path.resolve(UPLOAD_DIR, "fileSteam/fchunkDir" + fileName);

//       // await fs.removeSync(chunkDir);
//       if (!fs.existsSync(chunkDir)) {
//         await fs.mkdirs(chunkDir);
//       }

//       await fs.move(chunk.path, `${chunkDir}/${hash}`);

//       res.writeHead(200, { "content-type": "text/plain;charset=utf-8" });
//       res.write(index);
//       res.end();
//     });
//   });
// }
if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("online", function (worker) {
    console.log("Worker " + worker.process.pid + " is online");
  });

  cluster.on("exit", function (worker, code, signal) {
    console.log(
      "Worker " +
        worker.process.pid +
        " died with code: " +
        code +
        ", and signal: " +
        signal
    );
    console.log("Starting a new worker");
    // cluster.fork();
  });
} else if (cluster.isWorker) {
  const app = express();
  app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });
  app.use(express.static("public"));
  console.log(
    `这是工作进程 ${cluster.worker.id}`,
    cluster.isWorker,
    "cluster.isWorker"
  );
  cluster.worker.on("error", function (worker, code, signal) {
    console.log("worker " + worker.process.pid + " died");
  });
  app.post("/file/uploading", (req, res, next) => {
    console.log(`发送请求时，工作进程 ${cluster.worker.id}`);
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
  app.use(express.static("public")).listen(1000);
}

// 合并chunk
// app.post("/file/mergrChunk", async (req, res, next) => {
//   FILE_NAME = path.resolve(UPLOAD_DIR, "fileSteam/" + FILE_NAME);
//   console.log(FILE_NAME, "========================");
//   let dests = fs.readdirSync(chunkDir);
//   dests = dests.sort((a, b) => a - b);
//   await WriteStreamsAsync(dests);
//   await fs.removeSync(chunkDir);
//   res.write("200");
//   res.end();
// });
