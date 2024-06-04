import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";
import SelectStatus from "./select-status";
import { IApplication } from "@/types";

export const columns: ColumnDef<IApplication>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { id, status } = row.original;
      return <SelectStatus id={id} status={status} />;
    },
  },
  {
    accessorKey: "company_name",
    header: "Company",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "setup",
    header: "Setup",
  },
  {
    accessorKey: "",
    header: "Compensation",
    cell: ({ row }) => {
      const { min_compensation, max_compensation } = row.original;
      const format =
        min_compensation > max_compensation
          ? max_compensation
          : `${min_compensation} - ${max_compensation}`;

      return <div>{format}</div>;
    },
  },
  {
    accessorKey: "application_date",
    header: "Date Applied",
    cell: ({ row }) => {
      const { application_date } = row.original;
      const format = moment(application_date).format("MMM DD, YYYY");
      return <div>{format}</div>;
    },
  },
  {
    accessorKey: "job_link",
    header: "Job Site",
  },
];
