import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { statusOptions, setupOptions } from "@/components/form/options";
import SelectFilter from "@/components/select-filter";

import ApplicationsTable from "./table/applications-table";
import { getApplications } from "@/services/applications.service";

// Modal
import CustomModal from "@/components/custom-modal";
import ModalManager from "./modals/modal-manager";

import { IApplication, ModalMode } from "@/types";

function ApplicationsPage() {
  const [mode, setMode] = useState<ModalMode>("");
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<IApplication | null>(null);

  // modal handlers
  const openModal = (mode: ModalMode) => {
    setMode(mode);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //
  const handleSelectedData = (data: IApplication) => {
    setSelectedData(data);
  };

  // filters
  const [filters, setFilters] = useState({
    status: "",
    setup: "",
  });

  const handleFilters = (value: string, name: string) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  const { data } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
    initialData: [],
  });

  return (
    <div className="flex w-full flex-col gap-2">
      {/* Utilities */}
      <div className="flex gap-4">
        {/* <AddApplcationModal /> */}
        <Button onClick={() => openModal("create")}> Add</Button>

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
      <ScrollArea className="rounded bg-background shadow-lg">
        <ApplicationsTable
          data={data}
          filters={filters}
          openModal={openModal}
          handleSelectedData={handleSelectedData}
        />
      </ScrollArea>

      {/* Render modal based on mode */}
      <CustomModal open={showModal} onOpenChange={closeModal}>
        <ModalManager mode={mode} data={selectedData} closeModal={closeModal} />
      </CustomModal>
    </div>
  );
}

export default ApplicationsPage;
