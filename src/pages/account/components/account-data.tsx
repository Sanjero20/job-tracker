import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface Props {
  openModal: () => void;
  setType: Dispatch<SetStateAction<"data" | "account">>;
}

function AccountData({ openModal, setType }: Props) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-gray-600">
        <Database size={24} color="gray" />
        <h2 className="text-xl">User Data</h2>
      </div>

      {/*  */}

      <Button
        variant={"destructive-outline"}
        onClick={() => {
          setType("data");
          openModal();
        }}
      >
        Reset Data
      </Button>
    </section>
  );
}

export default AccountData;
