import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { verifyAccount } from "@/services/auth.service";
import Sidebar from "./sidebar";
import { useAccount } from "@/stores/account";

function ProtectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();
  const { setInfo, clearInfo } = useAccount();

  // Auth guard
  useEffect(() => {
    const verifyAccess = async () => {
      const { isLoggedIn, name, email } = await verifyAccount();

      if (isLoggedIn == false) {
        setIsAuthenticated(false);
        removeCookie("token");
        navigate("/login", { replace: true });
        clearInfo();
        return;
      }

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
