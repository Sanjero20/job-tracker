import { Card } from "@/components/ui/card";

import StatusBarGraph from "@/pages/dashboard/components/status-bargraph";
import ApplicationsOverview from "@/pages/dashboard/components/overview";
import InterviewCalendar from "@/pages/dashboard/components/interview-calendar";
import ApplicationsActivity from "@/pages/dashboard/components/application-activity";

function DashboardPage() {
  return (
    <div className="grid h-fit grid-cols-8 gap-4">
      <Card className="col-span-8 flex flex-col gap-4 p-4">
        <p className="text-xl font-bold">Overview</p>
        <ApplicationsOverview />
      </Card>

      {/* Graphs */}
      <Card className="col-span-4 row-span-2 flex flex-col gap-2 p-4 pb-0 ">
        <p className="text-center font-bold">Status Distribution</p>
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
      <Card className="col-span-6 flex justify-center p-4">
        <ApplicationsActivity />
      </Card>

      <Card className="col-span-2 p-4">
        <p>Recent Status Change - Company Name, role, status k</p>
      </Card>
    </div>
  );
}

export default DashboardPage;
