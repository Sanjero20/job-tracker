import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <>main route</>,
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
  return <RouterProvider router={routes} />;
}

export default App;
