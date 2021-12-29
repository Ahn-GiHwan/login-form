import React from "react";
import ReactDOM from "react-dom";

import { worker } from "./mock/browser";

import App from "./App.jsx";

if (process.env.NODE_ENV === "development") worker.start();

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
