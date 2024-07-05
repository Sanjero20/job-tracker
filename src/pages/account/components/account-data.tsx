import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";

function AccountData() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-gray-600">
        <Database size={24} color="gray" />
        <h2 className="text-xl">User Data</h2>
      </div>

      {/*  */}

      <div className="grid grid-cols-2 gap-4">
        <Button>Export to CSV</Button>
        <Button variant={"destructive"}>Reset Data</Button>
      </div>
      {/*  */}
    </section>
  );
}

export default AccountData;
