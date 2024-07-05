import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";
import { updateInterviewStatus } from "@/services/interviews.service";
import { queryClient } from "@/App";

interface Props {
  id: number;
  interviewed: boolean;
  status: string;
}

function InputCheckbox({ id, interviewed, status }: Props) {
  const [isChecked, setIsChecked] = useState(interviewed);

  const mutation = useMutation({
    mutationFn: () => updateInterviewStatus(id, isChecked, status),
    onSettled: () => {
      queryClient.refetchQueries();
    },
  });

  const handleInputClick = async (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    mutation.mutate();
  };

  return (
    <Input
      type="checkbox"
      className="h-5 accent-primary"
      checked={isChecked}
      onChange={handleInputClick}
      disabled={status == "Interviewed"}
    />
  );
}

export default InputCheckbox;
