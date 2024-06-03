import { useQuery } from "@tanstack/react-query";

import LogoutButton from "@/components/logout-btn";
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/table/columns";
import AddApplcation from "@/components/modals/add-application";
import CustomSelect from "@/components/custom-select";

import { getApplications } from "@/services/applications.service";
import { statusOptions, setupOptions } from "@/components/form/options";
import { useState } from "react";

function MainPage() {
  // Filters
  const [filters, setFilters] = useState({
    status: "",
    setup: "",
  });

  const { data } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
    initialData: [],
  });

  const handleFilters = (value: string, name: string) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  console.log(filters);

  return (
    <div className="container flex flex-col gap-2">
      <header className="flex w-full items-center justify-between py-2">
        <h1 className="text-xl font-bold">Application Tracker</h1>
        <LogoutButton />
      </header>

      {/* Utilities */}
      <div className="flex gap-4">
        <AddApplcation />

        {/* Filters  */}
        <CustomSelect
          options={statusOptions}
          value={filters.status}
          setValue={handleFilters}
          placeholder="Status"
          name="status"
          className="w-[180px]"
        />

        <CustomSelect
          options={setupOptions}
          value={filters.setup}
          setValue={handleFilters}
          placeholder="Setup"
          name="setup"
          className="w-[180px]"
        />
      </div>

      {/* Table */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default MainPage;
