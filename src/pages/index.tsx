import { useQuery } from "@tanstack/react-query";

import LogoutButton from "@/components/logout-btn";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/table/columns";

import { getApplications } from "@/services/applications.service";
import SelectStatus from "@/components/form/select-status";

function MainPage() {
  const { data } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
    initialData: [],
  });

  return (
    <div className="container flex flex-col gap-2">
      <header className="flex w-full items-center justify-between py-2">
        <h1 className="text-xl font-bold">Application Tracker</h1>
        <LogoutButton />
      </header>

      {/* Filters  */}
      <div className="flex gap-4">
        <Button> Add Application</Button>
        <SelectStatus />
      </div>

      {/* Table */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default MainPage;
