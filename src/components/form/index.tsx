import { useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomSelect from "@/components/custom-select";

import { jobSiteOptions, setupOptions, statusOptions } from "./options";
import { queryClient } from "@/App";
import { addApplication } from "@/services/applications.service";
import { useAddModal } from "@/stores/addModalStore";
import { IForm } from "@/types";

const initialState: IForm = {
  status: statusOptions[0],
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
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useAddModal();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSelect = (value: string, name: string) => {
    const newValues = { ...values, [name]: value };
    setValues(newValues);
  };

  const mutation = useMutation({
    mutationFn: () => addApplication(values),
    onMutate: () => setIsLoading(true),
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
    onError: () => {
      // Display error
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    // Disable add button on click
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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

        <CustomSelect
          name="setup"
          value={values.setup}
          setValue={handleSelect}
          options={setupOptions}
          placeholder="setup"
          required
        />
      </fieldset>

      <fieldset className="flex gap-2">
        <Input
          type="number"
          name="min_compensation"
          value={values.min_compensation}
          onChange={handleChange}
          placeholder="min compensation"
          step={1000}
          min={0}
        />

        <Input
          type="number"
          name="max_compensation"
          value={values.max_compensation}
          onChange={handleChange}
          placeholder="max compensation"
          step={1000}
          min={values.min_compensation}
          disabled={values.min_compensation < 0}
        />
      </fieldset>

      <Input
        name="application_date"
        value={values.application_date}
        onChange={handleChange}
        type="date"
        placeholder="application date"
        required
      />

      <fieldset className="flex gap-2">
        <CustomSelect
          name="job_site"
          value={values.job_site}
          setValue={handleSelect}
          options={jobSiteOptions}
          placeholder="Job Site"
          required
        />

        <Input
          name="job_link"
          value={values.job_link}
          onChange={handleChange}
          placeholder="url"
        />
      </fieldset>

      <Textarea
        name="note"
        value={values.note}
        onChange={handleChange}
        placeholder="note"
        className="resize-none"
      />

      <Button type="submit" disabled={isLoading}>
        Add Application
      </Button>
    </form>
  );
}

export default ApplicationForm;
