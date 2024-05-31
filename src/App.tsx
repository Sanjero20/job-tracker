import { RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { routes } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
