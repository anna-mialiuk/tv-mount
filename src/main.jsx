import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { initPhoneClickTracking } from "./utils/analytics";
import "./styles/index.sass";

initPhoneClickTracking();

const container = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

const isPrerenderedRoute = window.location.pathname === "/";

if (isPrerenderedRoute && container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.innerHTML = "";
  ReactDOM.createRoot(container).render(app);
}
