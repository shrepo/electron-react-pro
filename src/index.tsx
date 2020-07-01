import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// if (module.hot) {
//   module.hot.accept();
// }

// import React from "react";
// import ReactDOM from "react-dom";
// import "semantic-ui-css/semantic.min.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
