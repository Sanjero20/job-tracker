import { Button } from "@/components/ui/button";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [, , removeCookie] = useCookies();

  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <>
      Job applications
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
}

export default MainPage;
