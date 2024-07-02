import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { verifyToken } from "@/services/auth.service";

function UnprotectedPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccess = async () => {
      const isValid = await verifyToken();
      if (isValid) {
        navigate("/", { replace: true });
      }

      setIsAuthenticated(false);
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
