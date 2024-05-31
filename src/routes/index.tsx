import { createBrowserRouter } from "react-router-dom";

import ProtectedPage from "@/layouts/protected";
import UnprotectedPage from "@/layouts/unprotected";

import MainPage from "@/pages";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";

export const routes = createBrowserRouter([
  // Auth
  {
    path: "/",
    element: <UnprotectedPage />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  // Main
  {
    path: "/",
    element: <ProtectedPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);
