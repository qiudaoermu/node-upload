const fs = require("fs"); // 引入fs模块
const path = require("path");
/**
 * @params dests 文件流
 * @params FILE_NAME  生成的文件名
 * @params chunkDir 文件路径
 */
const WriteStreamsAsync = async (dests, FILE_NAME, chunkDir) => {
  let writeable = fs.createWriteStream(FILE_NAME);
  for (let i = 0; i < dests.length; i++) {
    await write(dests[i], writeable, chunkDir);
  }
};

const write = (item, writeable, chunkDir) => {
  return new Promise((resolve, reject) => {
    let destPath = path.resolve(__dirname, chunkDir + '/' + item);
    let readable = fs.createReadStream(destPath);
    readable.pipe(writeable, { end: false });
    readable.on("end", () => {
      // 关闭流之前立即写入最后一个额外的数据块
      resolve();
    });
  });
};

module.exports = { WriteStreamsAsync };
