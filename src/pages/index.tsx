import { useQuery } from "@tanstack/react-query";

import LogoutButton from "@/components/logout-btn";
import { DataTable } from "./components/table/data-table";
import { columns } from "./components/table/columns";

import { getApplications } from "@/services/applications.service";

function MainPage() {
  const { data } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
    initialData: [],
  });

  return (
    <div className="container">
      <header className="flex w-full items-center justify-between py-2">
        <h1 className="text-xl font-bold">Application Tracker</h1>
        <LogoutButton />
      </header>

      {/* Table */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default MainPage;
