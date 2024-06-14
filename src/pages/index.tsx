import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import LogoutButton from "@/components/logout-btn";
import CustomSelect from "@/components/custom-select";
import { statusOptions, setupOptions } from "@/components/form/options";
import ApplicationsTable from "@/components/table/applications-table";

import AddApplcationModal from "@/components/modals/add-application";
import ViewApplicationModal from "@/components/modals/view-application";

import { getApplications } from "@/services/applications.service";
import { ScrollArea } from "@/components/ui/scroll-area";
import DeleteApplicationModal from "@/components/modals/delete-application";
import UpdateApplicationModal from "@/components/modals/update-application";

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

  return (
    <div className="container flex flex-col gap-2 py-2">
      <header className="flex w-full items-center justify-between">
        <h1 className="text-xl font-bold">Application Tracker</h1>
        <LogoutButton />
      </header>

      {/* Utilities */}
      <div className="flex gap-4">
        <AddApplcationModal />

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
      <ScrollArea className="h-full max-h-[80vh] rounded bg-background shadow-lg">
        <ApplicationsTable data={data} filters={filters} />
      </ScrollArea>

      {/* Modals */}
      <ViewApplicationModal />
      <UpdateApplicationModal />
      <DeleteApplicationModal />
    </div>
  );
}

export default MainPage;
