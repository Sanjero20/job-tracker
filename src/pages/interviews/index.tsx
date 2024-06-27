import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Card } from "@/components/ui/card";
import InterviewTable from "./components/table/interview-table";
import CustomModal from "@/components/custom-modal";

import { getOngoingApplications } from "@/services/interviews.service";
import { IInterview } from "@/types";
import InterviewScheduleForm from "./components/form";

function InterviewPage() {
  const [selectedData, setSelectedData] = useState<IInterview | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (item: IInterview) => {
    setShowModal(true);
    setSelectedData(item);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const { data } = useQuery({
    queryKey: ["ongoing-applications"],
    queryFn: getOngoingApplications,
    initialData: [],
  });

  return (
    <div className="flex gap-4">
      {/*  */}

      <Card className="flex-1">
        <InterviewTable data={data} onRowClick={openModal} />
      </Card>

      <Card className="h-2/3 w-1/4">Calendar</Card>

      {/* Modal */}
      <CustomModal open={showModal} onOpenChange={closeModal}>
        {selectedData ? <InterviewScheduleForm data={selectedData} /> : <></>}
      </CustomModal>
    </div>
  );
}

export default InterviewPage;
