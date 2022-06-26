const fs = require("fs");
const path = require("fs");

function copy() {
  const from = path.resolve(__dirname, "../assets/abc1.txt");
  const to = path.resolve(__dirname, "../assets/abc2.txt");

  const rs = fs.createReadStream(from);
  const ws = fs.createWriteStream(to);

  // 方式1
  rs.on("data", (chunk) => {
    const flag = ws.write(chunk);
    // 写入通道已满，暂停读取，避免背压问题
    if (!flag) {
      rs.pause();
    }
  });

  // 已清空写入通道，可以再次写入
  ws.on("drain", () => {
    rs.resume();
  });

  rs.on("close", () => {
    // 文件关闭，写入完毕
    ws.close();
    console.log("复制成功");
  });

  // 方式2
  // 可读流连接可写流，同样解决背压问题
  rs.pipe(ws);
}

copy();
