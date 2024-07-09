import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { queryClient } from "@/App";

function LogoutButton() {
  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    queryClient.clear();
    removeCookie("token");
    navigate("/login");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Logout</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle> Logout</DialogTitle>
        </DialogHeader>

        <DialogDescription>Are you sure you want to logout?</DialogDescription>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LogoutButton;
