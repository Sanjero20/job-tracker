import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import MainPage from "@/pages";
import LoginPage from "@/pages/login";
import UnprotectedPage from "./layouts/unprotected";
import ProtectedPage from "./layouts/protected";
import RegisterPage from "./pages/register";

const routes = createBrowserRouter([
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
  {
    path: "/",
    element: <UnprotectedPage />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

function App() {
  return (
    <CookiesProvider>
      <RouterProvider router={routes} />
    </CookiesProvider>
  );
}

export default App;
