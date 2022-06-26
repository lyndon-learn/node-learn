const net = require("net");
const path = require("path");
const fs = require("fs");

const server = net.createServer();

server.listen(10000);

server.on("listening", () => {
  console.log("server listen on 9527");
});

server.on("connection", (socket) => {
  console.log("有客户端连接到服务器了");

  socket.on("data", async (chunk) => {
    const filePath = path.resolve(__dirname, "./src/assets/1.jpeg");
    const bodyBuffer = await fs.promises.readFile(filePath);
    // 这里需要特别注意，空2行，顶格
    const headerBuffer = Buffer.from(`HTTP/1.1 200 OK
Content-Type: image/jpeg
    
`,
      "utf-8"
    );
    const content = Buffer.concat([headerBuffer, bodyBuffer]);
    socket.write(content);
    socket.end();
  });

  socket.on("end", () => {
    console.log("连接关闭了！");
  });
});
