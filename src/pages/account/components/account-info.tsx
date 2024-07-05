import { SquareUserRound } from "lucide-react";
import { Input } from "@/components/ui/input";

function AccountInfo() {
  return (
    <section className="">
      <div className="mb-2 flex items-center gap-2 text-gray-600">
        <SquareUserRound size={24} color="gray" />
        <h2 className="text-xl">User Information</h2>
      </div>

      <form className="flex flex-col gap-2">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
      </form>
    </section>
  );
}

export default AccountInfo;
