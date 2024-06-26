import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOngoingApplications } from "@/services/interviews.service";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

function InterviewPage() {
  const { data } = useQuery({
    queryKey: ["ongoing-applications"],
    queryFn: getOngoingApplications,
    initialData: [],
  });

  return (
    <div className="flex gap-4">
      {/*  */}

      <Card className="flex-1">
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
                <TableRow key={item.application_id}>
                  <TableCell>{item.company_name}</TableCell>
                  <TableCell>{item.position}</TableCell>
                  <TableCell>
                    {item.schedule
                      ? moment(item.schedule).format("MMM DD, YYYY")
                      : ""}
                  </TableCell>
                  <TableCell>{item.link}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>

      <Card className="h-2/3 w-1/4">Calendar</Card>
    </div>
  );
}

export default InterviewPage;
