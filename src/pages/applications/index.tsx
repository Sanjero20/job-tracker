import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ScrollArea } from "@/components/ui/scroll-area";
import { statusOptions, setupOptions } from "@/components/form/options";
import SelectFilter from "@/components/select-filter";
import ApplicationsTable from "@/components/table/applications-table";

// modal components
import DeleteApplicationModal from "@/components/modals/delete-application";
import UpdateApplicationModal from "@/components/modals/update-application";
import AddApplcationModal from "@/components/modals/add-application";
import ViewApplicationModal from "@/components/modals/view-application";

import { getApplications } from "@/services/applications.service";

function MainPage() {
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
    <div className="flex flex-col gap-2">
      {/* Utilities */}
      <div className="flex gap-4">
        <AddApplcationModal />

        <SelectFilter
          options={statusOptions}
          value={filters.status}
          setValue={handleFilters}
          placeholder="Status"
          name="status"
          className="w-[180px]"
        />

        <SelectFilter
          options={setupOptions}
          value={filters.setup}
          setValue={handleFilters}
          placeholder="Setup"
          name="setup"
          className="w-[180px]"
        />
      </div>

      {/* Table */}
      <ScrollArea className="h-[80vh] max-h-[625px] rounded bg-background shadow-lg">
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