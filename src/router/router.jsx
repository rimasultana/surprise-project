import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home";
import Gallery from "../components/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);
export default router;
