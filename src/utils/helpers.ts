import path from "path";
// import fs from "fs";

const remote = require("electron").remote;
const app = remote.app;
const fs = remote.require("fs");

// export const getDBDir = (dbname: string, dbfile: string) => {
//   const dirPath = path.join(app.getPath("userData"), "db", dbname);
//   console.log("dirPath: ", dirPath);
//   if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
//   const dbPath = path.join(dirPath, dbfile);
//   console.log("DB_PATH: ", dbPath);
//   return dbPath;
// };
