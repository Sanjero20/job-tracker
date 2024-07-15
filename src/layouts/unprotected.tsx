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

  if (isAuthenticated)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        {/* Loader Spinner*/}
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>

        <p>Connecting to server. This may take a minute.</p>
      </div>
    );

  return (
    <div className="flex min-h-screen bg-light-2">
      <Outlet />
    </div>
  );
}

export default UnprotectedPage;
