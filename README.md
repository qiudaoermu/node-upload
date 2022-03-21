![image](https://user-images.githubusercontent.com/13454418/159228578-35df6086-7a11-416a-b13b-0032b762891c.png)

## NodeJs, zip 文件上传服务,可用于在服务区部署前端包 🐶🐶

`$ npm install`

启动
`$ pm2 start app.js--watch or node app.js`

停止
`$ pm2 stop app.js`

```
settings.js: {
  unzipPath: '/usr/nginx/html' //文件解压路径
}
```
