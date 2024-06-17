import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ProtectedPage from "@/layouts/protected";
import UnprotectedPage from "@/layouts/unprotected";

const MainPage = lazy(() => import("@/pages"));
const RegisterPage = lazy(() => import("@/pages/register"));
const LoginPage = lazy(() => import("@/pages/login"));

export const routes = createBrowserRouter([
  // Auth
  {
    path: "/",
    element: <UnprotectedPage />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense>
            <LoginPage />,
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense>
            <RegisterPage />,
          </Suspense>
        ),
      },
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
      {
        path: "/dashboard",
        element: <></>,
      },
    ],
  },
]);
