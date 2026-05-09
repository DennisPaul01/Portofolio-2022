import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./customeTheme";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider resetCSS theme={customTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Import Order:
// - Third Party Libraries
// - Custom Components
// - Utils Imports
// - Constant imports
// - Image Imports
// - Create file specific Constants
// (Separate each import category by one empty line)

// Rules for Components:
// - Very first line — Destrucutre Props (If there)
// - Destructure redux state — (If there)
// - Initialize State Variables — (If there)
// - Create Refs — (If there)
// - Initialize hooks ( useDispatch)
// - Write all useEffects
// - Create const/var/let specific to Component
// - Call functions — If there
// (Separate each section by one empty line)
