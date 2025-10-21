import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <App />
      </Stairs>
    </BrowserRouter>
  </StrictMode>
);
