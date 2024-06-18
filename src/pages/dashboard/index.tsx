import CardSummary from "@/components/dashboard/overview";
import StatusBarGraph from "@/components/dashboard/status-bargraph";
import { Card } from "@/components/ui/card";

function DashboardPage() {
  return (
    <div className="grid h-fit grid-cols-6 gap-4">
      <div className="col-span-6">
        <CardSummary />
      </div>

      {/* Percentage*/}
      <Card className="col-span-4 h-32 p-4">
        <p>Success Rate</p>

        <div className="grid h-full grid-cols-2 items-center">
          <p>Submitted -&gt; Ongoin / Interview</p>
          <p>Interview -&gt; Offered</p>
        </div>
      </Card>

      {/* Interview Schedule Calendar */}
      <Card className="col-span-2 row-span-2 h-64">
        Calendar View showing upcoming interviews and important dates.
      </Card>

      {/* Graphs */}
      <Card className="col-span-3 row-span-2 flex flex-col gap-2 p-4 pb-0 ">
        <p className="text-center"> Application Distribution</p>
        <div className="h-full">
          <StatusBarGraph />
        </div>
      </Card>

      <Card className="row-span-2">
        Pie Chart or Doughnut Chart showing the proportion of applications in
        each status (Submitted, In progress, Under Review, Interviewed,
        Rejected, Withdrawn, Offered).
      </Card>

      {/*  */}
      <Card className="col-span-2 h-48">
        Recent Status Change - Company Name, role, status
      </Card>

      <Card className="col-span-6 h-48">
        <p>activitiy calendar</p>
        <p>
          Display the activity graphs to show how often does the user applies to
          a job
        </p>
      </Card>
    </div>
  );
}

export default DashboardPage;
