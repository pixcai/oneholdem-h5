import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes";

import "./OneHoldem.css";

i18n.use(initReactI18next).init({
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
