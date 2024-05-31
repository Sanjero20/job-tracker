import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = [
  "Submitted",
  "In progress",
  "Under Review",
  "Interviewed",
  "Rejected",
  "Withdrawn",
  "Offered",
];

function SelectStatus() {
  const [status, setStatus] = useState("");

  const handleSelect = (value: string) => {
    const newValue = value == "null" ? "" : value;
    setStatus(newValue);
  };

  return (
    <Select value={status} onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="By Status" />
      </SelectTrigger>

      <SelectContent>
        {status != "" && (
          <SelectItem value="null" className="font-bold opacity-80">
            No Filter
          </SelectItem>
        )}

        {options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectStatus;
