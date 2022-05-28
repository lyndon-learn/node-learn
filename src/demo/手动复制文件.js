const fs = require("fs");
const path = require("path");

async function copy() {
  const fromFilePath = path.resolve(__dirname, "./src/assets/1.jpeg");
  const content = await fs.promises.readFile(fromFilePath);
  const toFilePath = path.resolve(__dirname, "./src/assets/1.copy.jpeg");
  await fs.promises.writeFile(toFilePath, content);
  console.log("复制成功");
}

copy();
