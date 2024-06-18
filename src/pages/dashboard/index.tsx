import { Card } from "@/components/ui/card";

import StatusBarGraph from "@/components/dashboard/status-bargraph";
import ApplicationsOverview from "@/components/dashboard/overview";
import InterviewCalendar from "@/components/dashboard/interview-calendar";

function DashboardPage() {
  return (
    <div className="grid h-fit grid-cols-6 gap-4">
      <Card className="col-span-8 flex flex-col gap-4 p-4">
        <p className="text-xl font-bold">Overview</p>
        <ApplicationsOverview />
      </Card>

      {/* Graphs */}
      <Card className="col-span-4 row-span-2 flex flex-col gap-2 p-4 pb-0 ">
        <p className="text-center font-bold"> Application Distribution</p>
        <div className="h-full">
          <StatusBarGraph />
        </div>
      </Card>

      <Card className="col-span-2 p-4">Chart</Card>

      {/* Interview Schedule Calendar */}
      <Card className="col-span-2 row-span-2 w-fit p-4">
        <p className="text-center font-bold">Interview Dates</p>
        <InterviewCalendar />
      </Card>

      <Card className="col-span-2 p-4">Chart</Card>

      {/*  */}

      <Card className="col-span-4 p-4">
        <p>activitiy calendar</p>
        <p>
          Display the activity graphs to show how often does the user applies to
          a job
        </p>
      </Card>

      <Card className="col-span-4 p-4">
        Recent Status Change - Company Name, role, status
      </Card>
    </div>
  );
}

export default DashboardPage;
