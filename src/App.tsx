import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import MainLayout from "./layouts/layout";
import MainPage from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <>Login page</>,
  },
  {
    path: "/register",
    element: <>Register page</>,
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
