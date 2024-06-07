import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { statusOptions } from "../form/options";
import { updateStatus } from "@/services/applications.service";
import { queryClient } from "@/App";

interface Props {
  id: number;
  status: string;
}

function SelectStatus({ id, status }: Props) {
  const [value, setValue] = useState(status);

  const mutation = useMutation({
    mutationFn: () => updateStatus(id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
    // onError: () => {},
  });

  const handleSelect = async (val: string) => {
    setValue(val);
    mutation.mutate();
  };

  return (
    <Select value={value} onValueChange={handleSelect}>
      <SelectTrigger className="w-[175px]">
        <SelectValue placeholder="Status" />
      </SelectTrigger>

      <SelectContent>
        {statusOptions.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectStatus;
