import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contacto from "../pages/Contacto/Contacto";
import Servicios from "../pages/Servicios/Servicios";
import Sostenibilidad from "../pages/Sostenibilidad/Sostenibilidad";
import Trabaja from "../pages/Trabaja/Trabaja";
import Nosotros from "../pages/Nosotros/Nosotros";
import Root from "../root/Root";


const router = createBrowserRouter([
  // ── Español (base) ─────────────────────────────────────
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true,                        element: <Home /> },
      { path: "nosotros",                   element: <Nosotros /> },
      { path: "contacto",                   element: <Contacto /> },
      { path: "servicios/:slug",                  element: <Servicios /> },
      { path: "sostenibilidad",             element: <Sostenibilidad /> },
      { path: "trabaja-con-nosotros",       element: <Trabaja /> },
    ],
  },

  // ── Inglés (/en/...) ───────────────────────────────────
  {
    path: "/en",
    element: <Root />,
    children: [
      { index: true,                        element: <Home /> },
      { path: "about-us",                   element: <Nosotros /> },
      { path: "contact",                    element: <Contacto /> },
      { path: "services/:slug",                   element: <Servicios /> },
      { path: "sustainability",             element: <Sostenibilidad /> },
      { path: "work-with-us",               element: <Trabaja /> },
    ],
  },

  // ── Alemán (/de/...) ───────────────────────────────────
  {
    path: "/de",
    element: <Root />,
    children: [
      { index: true,                        element: <Home /> },
      { path: "ueber-uns",                  element: <Nosotros /> },
      { path: "kontakt",                    element: <Contacto /> },
      { path: "dienstleistungen/:slug",           element: <Servicios /> },
      { path: "nachhaltigkeit",             element: <Sostenibilidad /> },
      { path: "arbeite-mit-uns",            element: <Trabaja /> },
    ],
  },

  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;