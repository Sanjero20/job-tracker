import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { verifyToken } from "@/services/auth.service";
import Header from "./header";

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
    <div className="container flex min-h-screen flex-grow flex-col gap-2 bg-light py-2">
      <Header />

      <div className="grid h-full flex-1 gap-2 pb-2">
        <Outlet />
      </div>
    </div>
  );
}

export default ProtectedPage;
