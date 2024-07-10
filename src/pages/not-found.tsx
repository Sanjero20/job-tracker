import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-light-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">This Page does not exist!</h1>
        <Button onClick={() => navigate("/", { replace: true })}>
          Go to Main page
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
