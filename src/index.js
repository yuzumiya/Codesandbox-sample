import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import { App } from "./App.jsx";

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
