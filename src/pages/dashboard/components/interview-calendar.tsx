import { useState } from "react";
import { Calendar } from "../../../components/ui/calendar";

function InterviewCalendar() {
  const [dates, setDates] = useState<Date[]>([
    new Date(),
    new Date("06-24-24"),
  ]);

  return <Calendar mode="multiple" modifiers={{ selected: dates }} />;
}

export default InterviewCalendar;
