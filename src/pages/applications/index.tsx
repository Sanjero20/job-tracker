import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ScrollArea } from "@/components/ui/scroll-area";
import { statusOptions, setupOptions } from "@/components/form/options";
import SelectFilter from "@/components/select-filter";

import ApplicationsTable from "./table/applications-table";

// modal components
import DeleteApplicationModal from "@/components/modals/delete-application";
import UpdateApplicationModal from "@/components/modals/update-application";
// import AddApplcationModal from "@/components/modals/add-application";
// import ViewApplicationModal from "@/components/modals/view-application";

import { getApplications } from "@/services/applications.service";
import CustomModal from "@/components/custom-modal";
import { Button } from "@/components/ui/button";

import { IApplication, ModalMode } from "@/types";
import ViewJobDetails from "./modals/view";

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

  const { data } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
    initialData: [],
  });

  const handleFilters = (value: string, name: string) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  let component = null;

  switch (mode) {
    case "create":
      component = <>Create</>;
      break;
    case "read":
      component = data ? <ViewJobDetails data={selectedData} /> : "";
      break;
    case "update":
      component = <>Update</>;
      break;
    case "delete":
      component = <>Delete</>;
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

      {/* Modals */}
      {/* <ViewApplicationModal /> */}
      <UpdateApplicationModal />
      <DeleteApplicationModal />

      <CustomModal open={showModal} onOpenChange={closeModal}>
        {component}
      </CustomModal>
    </div>
  );
}

export default MainPage;
