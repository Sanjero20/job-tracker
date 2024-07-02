import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { verifyToken } from "@/services/auth.service";
import Sidebar from "./sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="bg-light-2">
      <div className="container flex h-screen gap-4 overflow-hidden p-4">
        <Sidebar />

        {/* <ScrollArea className="w-full"> */}
        <Outlet />
        {/* </ScrollArea> */}
      </div>
    </div>
  );
}

export default ProtectedPage;
