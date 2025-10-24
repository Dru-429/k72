import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";
import { PreviousPathProvider } from "./context/PreviousPathContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <PreviousPathProvider>
          <App />
        </PreviousPathProvider>
      </Stairs>
    </BrowserRouter>
  </StrictMode>
);
