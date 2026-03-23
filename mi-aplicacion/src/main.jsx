// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Proporcionamos el router a nuestra aplicación
// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // 👈 aquí estaba el error
import { RouterProvider } from "react-router-dom";
import router from "./utils/Router";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);