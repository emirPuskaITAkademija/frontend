import React from "react";
import ReactDOM from "react-dom/client";
import Animal from "./Animal";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Animal tipZivotinje='dog' />); // react UI
