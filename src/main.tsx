import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global-styles/style.scss";
import "./assets/styles/_mixins.scss";
import "./assets/styles/_variables.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
