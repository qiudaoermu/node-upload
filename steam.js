const fs = require("fs");
const path = require("path");
const { WriteStream } = require("tty");
const chunkDir = "chunkDirnew-bg (1).png";
const UPLOAD_DIR = path.resolve(__dirname);
const FILE_NAME = "./pnew-bg (1).png";
let arr = fs.readdirSync(path.resolve(UPLOAD_DIR, chunkDir));
// arr.forEach(async (item) => {
//   const destPath = path.resolve(path.resolve(UPLOAD_DIR, chunkDir), item);
//   console.log(destPath, "destPath");
//   console.log(item,'================================')
//   const readable = fs.createReadStream(destPath);
//   const writeable = fs.createWriteStream(FILE_NAME);
//   // 把chip 写入 new.txt中
//   readable.pipe(writeable);
// })

const WriteStreams = () => {
  let writeable = fs.createWriteStream(FILE_NAME);
  for (let i = 0; i < arr.length; i++) {
    (function (j) {
      //闭包
      setTimeout(function () {
        console.log(j); //分别输出i的值
        let destPath = path.resolve(path.resolve(UPLOAD_DIR, chunkDir), arr[j]);
        console.log(destPath, "================================");
        let readable = fs.createReadStream(destPath);
        // 把chip 写入 new.txt中
        readable.pipe(writeable, { end: false });
      }, 2000 * j);
    })(i); //闭包
  }
};

const WriteStreamsAsync = async () => {
  let writeable = fs.createWriteStream(FILE_NAME);
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    await write(arr[i], writeable);
  }
};

const write = (item, writeable) => {
  return new Promise((resolve, reject) => {
    let destPath = path.resolve(path.resolve(UPLOAD_DIR, chunkDir), item);
    console.log(destPath, "================================");
    let readable = fs.createReadStream(destPath);
    // 把chip 写入 new.txt中
    readable.pipe(writeable, { end: false });
    readable.on("end", () => {
      resolve();
      // 关闭流之前立即写入最后一个额外的数据块
    });
  });
};

// WriteStreams()
WriteStreamsAsync();
