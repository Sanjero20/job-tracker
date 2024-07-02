import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SelectStatus from "./select-status";

import { formatSalary } from "@/utils/formatSalary";
import { IApplication, ModalMode } from "@/types";
import { Button } from "@/components/ui/button";

interface Props {
  data: IApplication[];
  filters: {
    setup: string;
    status: string;
  };

  openModal: (mode: ModalMode) => void;
  handleSelectedData: (data: IApplication) => void;
}

function ApplicationsTable({
  data,
  filters,
  openModal,
  handleSelectedData,
}: Props) {
  const handleClick = (mode: ModalMode, data: IApplication) => {
    openModal(mode);
    handleSelectedData(data);
  };

  return (
    <Table className="relative h-full w-full">
      {/* Columns */}
      <TableHeader className="sticky top-0">
        <TableRow className="bg-background hover:bg-background">
          <TableHead className="w-52">Status</TableHead>
          <TableHead className="w-48">Company</TableHead>
          <TableHead className="w-48">Position</TableHead>
          <TableHead className="w-[20ch]">Price</TableHead>
          <TableHead>Setup</TableHead>
          <TableHead className="w-[15ch]">Date Applied</TableHead>
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
              onClick={() => handleClick("read", application)}
            >
              <TableCell onClick={(e) => e.stopPropagation()}>
                <SelectStatus id={application.id} status={application.status} />
              </TableCell>

              <TableCell>{application.company_name}</TableCell>

              <TableCell>{application.position}</TableCell>

              {/* TODO: Proper formatting */}
              <TableCell>
                {formatSalary(
                  application.min_compensation,
                  application.max_compensation,
                )}
              </TableCell>

              <TableCell>{application.setup}</TableCell>

              <TableCell>
                {moment(application.application_date).format("MMM DD, YYYY")}
              </TableCell>

              {/* Actions */}
              <TableCell
                className="grid grid-cols-2 gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant={"outline"}
                  onClick={() => handleClick("update", application)}
                >
                  Edit
                </Button>

                <Button
                  variant={"outline"}
                  onClick={() => handleClick("delete", application)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default ApplicationsTable;
