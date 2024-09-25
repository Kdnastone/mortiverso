<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/Router";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router />
    </StrictMode>
);
>>>>>>> development
