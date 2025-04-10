import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import DashboardLayout from "./components/layouts/Dashboard.layout";
import { Form, Home } from "./pages";

const router = createBrowserRouter([
  {
    Component: DashboardLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
