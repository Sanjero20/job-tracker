import { Calendar } from "@/components/ui/calendar";
import { IInterview } from "@/types";

interface Props {
  data: IInterview[];
  selectedDate: Date | null;
  handleSelect: (date: Date) => void;
}

function InterviewCalendar({ data, selectedDate, handleSelect }: Props) {
  const bookedDays = data.map((item) => new Date(item.schedule) || null);

  return (
    <Calendar
      mode="multiple"
      onDayClick={handleSelect}
      modifiers={{
        booked: bookedDays,
        selected: selectedDate ? [selectedDate] : [],
      }}
      modifiersClassNames={{ booked: "booked", selected: "selected" }}
      modifiersStyles={{
        booked: {
          border: "1px solid black",
        },
        selected: {
          background: "blue",
          color: "white",
        },
      }}
    />
  );
}

export default InterviewCalendar;
