import { Dispatch, SetStateAction } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  openModal: () => void;
  setType: Dispatch<SetStateAction<"data" | "account">>;
}

function AccountSecurity({ openModal, setType }: Props) {
  return (
    <section>
      <div className="flex items-center gap-2 text-gray-600">
        <Lock color="gray" size={24} />
        <h2 className="text-xl">Security</h2>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2">
        <p>For your account security, update your password regularly.</p>
        <Button className="w-40">Change Password</Button>

        <p>
          This action is permanent. Deleting your account will erase all your
          data.
        </p>

        <Button
          className="w-40"
          variant={"destructive"}
          onClick={() => {
            setType("account");
            openModal();
          }}
        >
          Delete Account
        </Button>
      </div>
    </section>
  );
}

export default AccountSecurity;
