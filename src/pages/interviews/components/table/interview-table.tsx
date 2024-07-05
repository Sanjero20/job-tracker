import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IInterview } from "@/types";
import moment from "moment";
import InputCheckbox from "./checkbox";

interface Props {
  data: IInterview[];
  onRowClick: (data: IInterview) => void;
  selectedDate: Date | null;
}

function InterviewTable({ data, onRowClick, selectedDate }: Props) {
  return (
    <Table className="relative w-full">
      <TableHeader className="sticky top-0 bg-white">
        <TableRow>
          <TableHead className="w-[15ch]">Status</TableHead>
          <TableHead className="w-[25ch]">Company</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="w-[15ch]">Schedule</TableHead>
          <TableHead>Interviewed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((item) => (
            <TableRow
              key={item.job_id}
              onClick={() => onRowClick(item)}
              className={`${moment(selectedDate).format("YYYY-MM-DD") == item.schedule ? "bg-sky-500" : ""} cursor-pointer select-none`}
            >
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.company_name}</TableCell>
              <TableCell>{item.position}</TableCell>
              <TableCell>
                {item.schedule
                  ? moment(item.schedule).format("MMM DD, YYYY")
                  : ""}
              </TableCell>
              <TableCell onClick={(e) => e.stopPropagation()}>
                <InputCheckbox
                  id={item.job_id}
                  interviewed={item.interviewed}
                  status={item.status}
                />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default InterviewTable;
