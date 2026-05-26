import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";

import Products from "../../vite react app/react-app/src/Products.jsx";

createRoot(document.createElement("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>,
);
