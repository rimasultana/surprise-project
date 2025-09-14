import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home";
import PartyGallery from "../components/PartyGallery";
import SpecialGallery from "../components/SpecialGallery";
import BirthdayWish from "../components/BirthdayWish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/partygallery",
        element: <PartyGallery />,
      },
      {
        path: "/specialgallery",
        element: <SpecialGallery />,
      },
      {
        path: "/birthdaywish",
        element: <BirthdayWish />,
      },
    ],
  },
]);

export default router;
