import { useQuery } from "@tanstack/react-query";
import { Calendar } from "@/components/ui/calendar";
import { getInterviewDates } from "@/services/dashboard.service";

function InterviewCalendar() {
  const { data } = useQuery({
    queryKey: ["interview-calendar"],
    queryFn: getInterviewDates,
    initialData: [],
  });

  return <Calendar mode="multiple" modifiers={{ selected: data }} />;
}

export default InterviewCalendar;
