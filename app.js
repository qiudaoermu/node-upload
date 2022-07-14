const express = require('express');
var compressing = require("compressing");
const app = express();
var multiparty = require('multiparty');
var fs = require("fs-extra");
var deleteall = require('./until');
app.use(express.static('public'));
// const multiparty = require("multiparty-express");
const path = require('path');
const UPLOAD_DIR = path.resolve(__dirname);
let rootPath = path.resolve(__dirname, './public');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
/* 上传 */
app.post('/file/uploading',  (req, res, next) => {
  /* 生成multiparty对象，并配置上传目标路径 */
  
  var form = new multiparty.Form();
  form.parse(req,  async (err, fields, files) => {
    console.log(fields, "fields");
    console.log(files, "files");  
    
    // if(err) return;
    const [chunk] = files.chunk;
    const [hash] = fields.hash;
    // const [fileName] = 
    const chunkDir = path.resolve(UPLOAD_DIR, 'chunkDir');

    if (!fs.existsSync(chunkDir)) {
      await fs.mkdirs(chunkDir);
    }
   
    await fs.move(chunk.path, `${chunkDir}/${hash}`);

    res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
    res.write('200');
    res.end();
  });
});
app.use(express.static('public'))
  .listen(1000);
