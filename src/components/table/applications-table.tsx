import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import SelectStatus from "./select-status";
import { useViewModalStore } from "@/stores/viewModalStore";
import { IApplication } from "@/types";

interface Props {
  data: IApplication[];
  filters: {
    setup: string;
    status: string;
  };
}

function ApplicationsTable({ data, filters }: Props) {
  const { openModal } = useViewModalStore();

  return (
    <Table className="relative h-full w-full">
      {/* Columns */}
      <TableHeader className="sticky top-0">
        <TableRow className="bg-background hover:bg-background">
          <TableHead>Status</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Setup</TableHead>
          <TableHead>Date Applied</TableHead>
          <TableHead>Job Posting</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      {/* Content */}
      <TableBody>
        {data
          .filter((item) => item.status === filters.status || !filters.status)
          .filter((item) => item.setup === filters.setup || !filters.setup)
          .map((application) => (
            <TableRow
              key={application.id}
              className="cursor-pointer select-none"
            >
              <TableCell>
                <SelectStatus id={application.id} status={application.status} />
              </TableCell>

              <TableCell>{application.company_name}</TableCell>

              <TableCell>{application.position}</TableCell>

              {/* TODO: Proper formatting */}
              <TableCell>
                {application.min_compensation} - {application.max_compensation}
              </TableCell>

              <TableCell>{application.setup}</TableCell>

              <TableCell>
                {moment(application.application_date).format("MMM DD, YYYY")}
              </TableCell>

              <TableCell>
                <a
                  href={application.url}
                  target="blank"
                  className="hover:underline"
                >
                  {application.site}
                </a>
              </TableCell>

              {/* Actions */}
              <TableCell></TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default ApplicationsTable;
