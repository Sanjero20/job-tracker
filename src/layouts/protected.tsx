import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { verifyToken } from "@/services/auth.service";
import MainLayout from "./layout";

function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  // Auth guard
  useEffect(() => {
    const verifyAccess = async () => {
      const isValid = await verifyToken();

      if (!isValid) {
        setIsAuthenticated(false);
        removeCookie("token");
        navigate("/login", { replace: true });
        return;
      }

      setIsAuthenticated(true);
    };

    verifyAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) return;

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default ProtectedPage;
