import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { verifyAccount } from "@/services/auth.service";
import { useAccount } from "@/stores/account";

function UnprotectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  const { setInfo, clearInfo } = useAccount();

  useEffect(() => {
    const verifyAccess = async () => {
      const { isLoggedIn, name, email } = await verifyAccount();

      if (isLoggedIn) {
        setInfo(name, email);
        navigate("/", { replace: true });
      }

      setIsAuthenticated(false);
      clearInfo();
    };

    verifyAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticated) return;

  return (
    <div className="flex min-h-screen bg-light-2">
      <Outlet />
    </div>
  );
}

export default UnprotectedPage;
