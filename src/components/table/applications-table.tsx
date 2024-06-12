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

import { useViewModal } from "@/stores/viewModalStore";
import { IApplication } from "@/types";
import DeleteButtonModal from "./action-buttons/delete-button";
import UpdateButtonModal from "./action-buttons/update-button";

interface Props {
  data: IApplication[];
  filters: {
    setup: string;
    status: string;
  };
}

function ApplicationsTable({ data, filters }: Props) {
  const { openModal } = useViewModal();

  return (
    <Table className="relative h-full w-full">
      {/* Columns */}
      <TableHeader className="sticky top-0">
        <TableRow className="bg-background hover:bg-background">
          <TableHead className="w-52">Status</TableHead>
          <TableHead className="w-48">Company</TableHead>
          <TableHead className="w-48">Position</TableHead>
          <TableHead className="w-48">Price</TableHead>
          <TableHead>Setup</TableHead>
          <TableHead>Date Applied</TableHead>
          <TableHead>Job Posting</TableHead>
          <TableHead className="w-48">Actions</TableHead>
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
              onClick={() => openModal(application)}
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
              <TableCell className="flex gap-1">
                <UpdateButtonModal data={application} />
                <DeleteButtonModal id={application.id} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default ApplicationsTable;
