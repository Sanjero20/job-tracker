import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { verifyToken } from "../services/auth.service";

function MainLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies] = useCookies();
  const navigate = useNavigate();

  // Auth guard
  useEffect(() => {
    const verifyAccess = async () => {
      const res = await verifyToken();

      if (!res || !cookies.token) {
        setIsAuthenticated(false);
        navigate("/login");
        return;
      }

      setIsAuthenticated(true);
    };

    verifyAccess();
  }, []);

  if (!isAuthenticated) return;

  return (
    <div className="min-h-screen">
      <main className="container m-auto h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
