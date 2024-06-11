import { IApplication } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import SelectStatus from "./select-status";

import moment from "moment";

interface Props {
  data: IApplication[];
}

function ApplicationsTable({ data }: Props) {
  return (
    <Table className="relative h-full w-full">
      {/* Columns */}
      <TableHeader className="sticky top-0">
        <TableRow className="bg-background">
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
        {data.map((application) => (
          <TableRow key={application.id}>
            <TableCell>
              <SelectStatus id={application.id} status={application.status} />
            </TableCell>

            <TableCell>{application.company_name}</TableCell>

            <TableCell>{application.position}</TableCell>

            {/*Price  */}
            <TableCell>{application.min_compensation}</TableCell>

            <TableCell>{application.setup}</TableCell>

            <TableCell>
              {moment(application.application_date).format("MMM DD, YYYY")}
            </TableCell>

            <TableCell>{application.job_site}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ApplicationsTable;
