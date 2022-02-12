import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./customeTheme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider resetCSS theme={customTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
