import { IApplication } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IApplication>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;

      // Change with select input
      return <div></div>;
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
      const month = new Date(application_date).getMonth();

      return <div>{month}</div>;
    },
  },
  {
    accessorKey: "job_link",
    header: "Job Site",
  },
];
