import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css"
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
