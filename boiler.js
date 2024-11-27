// import { mkdir } from "node:fs";

const fs = require("fs");


const folderName = process.argv[2] || "Project";

// fs.mkdir("project", { recursive: true }, (err) => {
//   if (err) throw err;
// });

res

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "/index.html");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/index.css`, "");
} catch (error) {
  console.log(error);
}

