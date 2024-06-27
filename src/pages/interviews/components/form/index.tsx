import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IInterview } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  data: IInterview;
}

function InterviewScheduleForm({ data }: Props) {
  const [values, setValues] = useState(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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

          <Label>Meeting Link (Optional)</Label>
          <Input
            name="link"
            value={values.link}
            onChange={handleChange}
            placeholder="link"
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
