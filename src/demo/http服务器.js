const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  // 请求
  console.log("有请求来了！！！");
  console.log("请求路径", req.url);
  console.log("请求方法", req.method);
  // url方法过期
  console.log("请求头", url.parse(req.headers));
  // 组合body，流传递
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString("utf-8");
  });
  req.on("end", () => {
    console.log("请求体", body);
  });

  // 响应
  res.setHeader("a", 1);
  res.write("hello world");
  res.end();
});

server.listen("9527");

server.on("listening", () => {
  console.log("server listen on 9527");
});
