import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { IInterview } from "@/types";
import { updateSchedule } from "@/services/interviews.service";
import { queryClient } from "@/App";

interface Props {
  data: IInterview;
  closeModal: () => void;
}

function InterviewScheduleForm({ data, closeModal }: Props) {
  const [values, setValues] = useState(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const mutation = useMutation({
    mutationFn: () => updateSchedule(values),
    onMutate: () => console.log(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
      closeModal();
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="schedule-form"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <h1 className="font-bold">{data.company_name}</h1>
          <h2>{data.position}</h2>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Interview Schedule</Label>
          <Input
            name="schedule"
            value={values.schedule}
            onChange={handleChange}
            type="date"
          />
        </div>
      </form>

      <DialogFooter className="grid grid-cols-2">
        <DialogClose asChild>
          <Button type="button" variant="ghost">
            Cancel
          </Button>
        </DialogClose>

        <Button type="submit" form="schedule-form">
          Submit
        </Button>
      </DialogFooter>
    </>
  );
}

export default InterviewScheduleForm;
