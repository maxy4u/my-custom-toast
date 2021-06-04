import React from "react";
import ReactDOM from "react-dom";
import { withToastProvider } from "./Toast";

import App from "./App";

const AppWithToastProvider = withToastProvider(App);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppWithToastProvider />
  </React.StrictMode>,
  rootElement
);
