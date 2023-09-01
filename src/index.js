import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import your main App component
import "./index.css"; // Import your global CSS file

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
