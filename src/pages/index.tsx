import { FormEvent, useEffect, useState } from "react";
import LogoutButton from "@/components/logout-btn";

import {
  addAppliction,
  getApplications,
} from "@/services/applications.service";

import { IApplication } from "@/types";

import { DataTable } from "./components/table/data-table";
import { columns } from "./components/table/columns";

function MainPage() {
  const [applications, setApplications] = useState<IApplication[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const res = await addAppliction({});
    // if (res) {
    //   setApplications([...applications, res.data]);
    // }
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

      {/* Table */}
      <DataTable columns={columns} data={applications} />
    </div>
  );
}

export default MainPage;
