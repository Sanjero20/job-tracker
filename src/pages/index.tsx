import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import LogoutButton from "@/components/logout-btn";
import { Input } from "@/components/ui/input";
import {
  addAppliction,
  getApplications,
} from "@/services/applications.service";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { IApplication, IForm } from "@/types";

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

function MainPage() {
  const [values, setValues] = useState(initialState);
  const [applications, setApplications] = useState<IApplication[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await addAppliction(values);

    if (res) {
      setApplications([...applications, res.data]);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getApplications();
      setApplications(data.applications);
    };

    getData();
  }, []);

  return (
    <div className="container">
      <header className="flex w-full items-center justify-between py-2">
        <h1 className="text-xl font-bold">Application Tracker</h1>
        <LogoutButton />
      </header>

      <Card className="max-w-96 p-4">
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
      </Card>

      {/* Table */}
      <div className="flex flex-col gap-1">
        {applications &&
          applications.map((data) => (
            <div key={data.id} className="flex gap-2">
              <p>{data.status}</p>
              <p>{data.position}</p>
              <p>{data.company_name}</p>
              <p>{data.min_compensation}</p>
              <p>{data.max_compensation}</p>
              <p>{data.setup}</p>
              <p>{data.application_date}</p>
              <p>{data.job_link}</p>
              <p>{data.job_site}</p>
              <p>{data.note}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MainPage;
