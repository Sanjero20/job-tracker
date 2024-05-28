import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { verifyToken } from "@/services/auth.service";
import MainLayout from "./layout";

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
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default UnprotectedPage;
