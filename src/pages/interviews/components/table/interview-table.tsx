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

interface Props {
  data: IInterview[];
  onRowClick: (data: IInterview) => void;
}

function InterviewTable({ data, onRowClick }: Props) {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableHead>Company</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Schedule</TableHead>
        <TableHead>Link</TableHead>
      </TableHeader>

      <TableBody>
        {data &&
          data.map((item) => (
            <TableRow
              key={item.application_id}
              onClick={() => onRowClick(item)}
              className="cursor-pointer select-none"
            >
              <TableCell>{item.company_name}</TableCell>
              <TableCell>{item.position}</TableCell>
              <TableCell>
                {item.schedule
                  ? moment(item.schedule).format("MMM DD, YYYY")
                  : ""}
              </TableCell>
              <TableCell className="w-[25ch] text-ellipsis">
                {item.link}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default InterviewTable;
