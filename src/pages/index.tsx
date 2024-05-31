import { useQuery } from "@tanstack/react-query";

import LogoutButton from "@/components/logout-btn";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/table/columns";
import SelectFilter from "@/components/select-filter";
import AddApplcation from "@/components/modals/add-application";

import { getApplications } from "@/services/applications.service";
import { statusOptions, setupOptions } from "@/components/form/options";

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
        <AddApplcation />
        <SelectFilter title="Status" options={statusOptions} />
        <SelectFilter title="Setup" options={setupOptions} />
      </div>

      {/* Table */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default MainPage;
