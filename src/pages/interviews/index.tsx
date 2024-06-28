import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Card } from "@/components/ui/card";
import InterviewTable from "./components/table/interview-table";
import InterviewCalendar from "./components/interview-calendar";
import InterviewScheduleForm from "./components/form";
import CustomModal from "@/components/custom-modal";

import { getOngoingApplications } from "@/services/interviews.service";
import { IInterview } from "@/types";
import moment from "moment";

function InterviewPage() {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedData, setSelectedData] = useState<IInterview | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (item: IInterview) => {
    setShowModal(true);
    setSelectedData(item);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSelectedDay = (date: Date) => {
    const pre = moment(selectedDay).format("YYYY-MM-DD");
    const now = moment(date).format("YYYY-MM-DD");

    // Toggle selected data
    if (pre === now) {
      setSelectedDay(null);
    } else {
      setSelectedDay(date);
    }
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
        <InterviewTable
          data={data}
          onRowClick={openModal}
          selectedDate={selectedDay}
        />
      </Card>

      <Card className="h-fit w-fit px-4">
        <InterviewCalendar
          data={data}
          selectedDate={selectedDay}
          handleSelect={handleSelectedDay}
        />
      </Card>

      {/* Modal */}
      <CustomModal open={showModal} onOpenChange={closeModal}>
        {selectedData ? (
          <InterviewScheduleForm data={selectedData} closeModal={closeModal} />
        ) : (
          <></>
        )}
      </CustomModal>
    </div>
  );
}

export default InterviewPage;
