import { useState, ChangeEvent, FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IForm } from "@/types";

const initialState: IForm = {
  status: "",
  position: "",
  company_name: "",
  min_compensation: 0,
  max_compensation: 0,
  setup: "",
  application_date: "",
  job_site: "",
  job_link: "",
  note: "",
};

function ApplicationForm() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const res = await addAppliction({});
    // if (res) {
    //   setApplications([...applications, res.data]);
    // }
  };

  return (
    <form className="flex flex-col gap-2">
      <Input
        name="company_name"
        value={values.company_name}
        onChange={handleChange}
        placeholder="company name"
      />

      <fieldset className="flex gap-2">
        <Input
          name="position"
          value={values.position}
          onChange={handleChange}
          placeholder="position"
        />

        <Input
          name="setup"
          value={values.setup}
          onChange={handleChange}
          placeholder="setup"
        />
      </fieldset>

      <fieldset className="flex gap-2">
        <Input
          type="number"
          name="min_compensation"
          value={values.min_compensation}
          onChange={handleChange}
          placeholder="min compensation"
          min={0}
        />
        <Input
          type="number"
          name="max_compensation"
          value={values.max_compensation}
          onChange={handleChange}
          placeholder="max compensation"
          min={0}
        />
      </fieldset>

      <Input
        name="application_date"
        value={values.application_date}
        onChange={handleChange}
        type="date"
        placeholder="application date"
      />

      <fieldset className="flex gap-2">
        <Input
          name="job_link"
          value={values.job_link}
          onChange={handleChange}
          placeholder="job link"
        />
        <Input
          name="job_site"
          value={values.job_site}
          onChange={handleChange}
          placeholder="job site"
        />
      </fieldset>

      <Input
        name="note"
        value={values.note}
        onChange={handleChange}
        placeholder="note"
      />

      <Button type="submit">Add Application</Button>
    </form>
  );
}

export default ApplicationForm;
