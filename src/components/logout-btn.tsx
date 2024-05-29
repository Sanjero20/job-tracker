import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button } from "./ui/button";

function LogoutButton() {
  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;
