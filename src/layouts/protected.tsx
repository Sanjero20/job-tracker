import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAccount } from "@/stores/account";
import { verifyAccount } from "@/services/auth.service";

import Sidebar from "./sidebar";

function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, , removeCookie] = useCookies();
  const { setInfo, clearInfo } = useAccount();

  const navigate = useNavigate();

  const handleUnauthenticated = () => {
    setIsAuthenticated(false);
    removeCookie("token");
    navigate("/login", { replace: true });
    clearInfo();
  };

  // Auth guard
  useEffect(() => {
    const verifyAccess = async () => {
      if (!cookies.token) {
        handleUnauthenticated();
        return;
      }

      const { isLoggedIn, name, email } = await verifyAccount();

      if (isLoggedIn == false) {
        handleUnauthenticated();
        return;
      }

      // Authenticated
      setIsAuthenticated(true);
      setInfo(name, email);
    };

    verifyAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) return;

  return (
    <div className="bg-light-2">
      <div className="container flex h-screen gap-4 overflow-hidden p-4">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
}

export default ProtectedPage;
