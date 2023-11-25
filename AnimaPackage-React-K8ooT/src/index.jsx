import React from "react";
import ReactDOMClient from "react-dom/client";
import { MyClients } from "./screens/MyClients";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MyClients />);
