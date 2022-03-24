const needle = require("needle");
const fs = require("fs");
const buffer = fs.readFileSync(
  "/Users/chen/gitlab/original-app-front/unpackage/dist/build/h5.zip"
);

const data = {
  file: {
    buffer: buffer,
    filename: "mypackage.zip",
    content_type: "application/octet-stream",
  },
};

// the callback is optional, and needle returns a `readableStream` object
// that triggers a 'done' event when the request/response process is complete.

needle.post(
  "http://localhost:9527/file/uploading",
  data,
  { multipart: true },
  function (err, resp, body) {
    // console.error(err);
    console.error(resp);
    // if you see, when using buffers we need to pass the filename for the multipart body.
    // you can also pass a filename when using the file path method, in case you want to override
    // the default filename to be received on the other end.
  }
);
