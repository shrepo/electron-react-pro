import React from "react";
// import { hot } from "react-hot-loader/root";
import Home from "./pages/Home";
import { ISyncConfig } from "@firestore-sqlite-sync/core";
import { fdb } from "./service/firestore/app";
// import { getDBDir } from "./utils";
import { SyncProvider } from "./providers/SyncProvider";
import path from "path";

const { remote, ipcRenderer } = window.require("electron");
// const ipcRenderer = require("ipcRenderer");
// const remote = require("remote");
const app = remote.app;
const fs = remote.require("fs");

const getDBDir = (dbname: string, dbfile: string) => {
  const dirPath = path.join(app.getPath("userData"), "db", dbname);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  const dbPath = path.join(dirPath, dbfile);
  console.log("DB_PATH: ", dbPath);
  return dbPath;
};

const syncConfig: ISyncConfig = {
  dbpath: getDBDir("sqlite", "sync.sqlite3"),
  collections: {
    // collection name and , name of fields to be synced
    customers: [
      { name: "name", type: "string" },
      { name: "phone", type: "string" },
      { name: "address", type: "string" },
    ],
    products: [
      { name: "name", type: "string" },
      { name: "description", type: "string" },
    ],
  },
};

function App() {
  return (
    <SyncProvider config={syncConfig} fireDB={fdb}>
      <Home />
    </SyncProvider>
  );
}

export default App;
// export default hot(App);

// import React from "react";
// import Navbar from "./components/Navbar";
// import Custom from "./components/Custom";
// import "./custom.css";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Custom />
//     </div>
//   );
// }
// export default App;

// // if (module.hot) {
// //   module.hot.accept();
// // }
