const express = require("express");
const app = express();
app.use(express.static("public"));
const multiparty = require("multiparty");
const fs = require("fs-extra");

const path = require("path");


app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/file/uploading", (req, res, next) => {
  /* 生成multiparty对象，并配置上传目标路径 */
  var form = new multiparty.Form();
  form.parse(req, async (err, fields, files) => {
    if(err) return;
    const [file] = files.file;
    const [fileName] = fields.fileName;
    dir = path.resolve(__dirname, "fileSteam/" + fileName);

    // 文件暂时放入 chunkDir文件夹中

    await fs.move(file.path, `${dir}`);

    res.writeHead(200, { "content-type": "text/plain;charset=utf-8" });
    res.write("200");
    res.end();
  });
});



app.use(express.static("public")).listen(1000);
