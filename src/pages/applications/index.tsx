import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { statusOptions, setupOptions } from "@/components/form/options";
import SelectFilter from "@/components/select-filter";

import ApplicationsTable from "./table/applications-table";
import { getApplications } from "@/services/applications.service";

// Modals
import CustomModal from "@/components/custom-modal";

import ViewJobDetails from "./modals/view";
import CreateApplicationModal from "./modals/create";
import UpdateApplicationModal from "./modals/update";
import DeleteApplicationModal from "./modals/delete";

import { IApplication, ModalMode } from "@/types";

function MainPage() {
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

  let component = null;

  switch (mode) {
    case "create":
      component = <CreateApplicationModal closeModal={closeModal} />;
      break;
    case "read":
      component = selectedData && <ViewJobDetails data={selectedData} />;
      break;
    case "update":
      component = selectedData && (
        <UpdateApplicationModal
          selectedData={selectedData}
          closeModal={closeModal}
        />
      );
      break;
    case "delete":
      component = selectedData && (
        <DeleteApplicationModal
          selectedData={selectedData}
          closeModal={closeModal}
        />
      );
      break;
    default:
      component = null;
  }

  return (
    <div className="flex flex-col gap-2">
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
      <ScrollArea className="h-[80vh] max-h-[625px] rounded bg-background shadow-lg">
        <ApplicationsTable
          data={data}
          filters={filters}
          openModal={openModal}
          handleSelectedData={handleSelectedData}
        />
      </ScrollArea>

      <CustomModal open={showModal} onOpenChange={closeModal}>
        {component}
      </CustomModal>
    </div>
  );
}

export default MainPage;
