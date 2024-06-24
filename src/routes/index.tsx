import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ProtectedPage from "@/layouts/protected";
import UnprotectedPage from "@/layouts/unprotected";

const RegisterPage = lazy(() => import("@/pages/register"));
const LoginPage = lazy(() => import("@/pages/login"));

const DashboardPage = lazy(() => import("@/pages/dashboard"));
const ApplicationsPage = lazy(() => import("@/pages/applications"));

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
        element: (
          <Suspense>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "/applications",
        element: (
          <Suspense>
            <ApplicationsPage />
          </Suspense>
        ),
      },
      {
        path: "/interviews",
        element: <Suspense>Interview List</Suspense>,
      },
    ],
  },
]);
