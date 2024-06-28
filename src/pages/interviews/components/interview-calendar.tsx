import { Calendar } from "@/components/ui/calendar";
import { IInterview } from "@/types";

interface Props {
  data: IInterview[];
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

function InterviewCalendar({ data, selectedDate, setSelectedDate }: Props) {
  const bookedDays = data.map((item) => new Date(item.schedule) || null);

  const handleDayClick = (day: Date) => {
    if (day == selectedDate) {
      setSelectedDate(null);
    }

    setSelectedDate(day);
  };

  return (
    <Calendar
      mode="multiple"
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
      onDayClick={handleDayClick}
    />
  );
}

export default InterviewCalendar;
