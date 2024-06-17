import CardSummary from "@/components/dashboard/summary";

function DashboardPage() {
  return (
    <div className="grid h-fit grid-cols-6 gap-4">
      <div className="col-span-6">
        <CardSummary />
      </div>

      {/* Percentage*/}
      <div className="col-span-4 h-32 bg-orange-300">
        <p>Success Rate</p>

        <div className="grid h-full grid-cols-2 items-center">
          <p>Submitted -&gte; Ongoin / Interview</p>
          <p>Interview -&gte; Offered</p>
        </div>
      </div>

      {/* Interview Schedule Calendar */}
      <div className="col-span-2 row-span-2 h-64 bg-green-500">
        Calendar View showing upcoming interviews and important dates.
      </div>

      {/* Graphs */}
      <div className="col-span-2 row-span-2 bg-yellow-300">
        Pie Chart or Doughnut Chart showing the proportion of applications in
        each status (Submitted, In progress, Under Review, Interviewed,
        Rejected, Withdrawn, Offered).
      </div>
      <div className="col-span-2 row-span-2 bg-yellow-300">
        Bar Chart comparing the number of applications in each status for
        different companies.
      </div>

      {/*  */}
      <div className="col-span-2 h-48 bg-violet-600">
        Recent Status Change - Company Name, role, status
      </div>

      <div className="col-span-6 h-48 bg-red-400">
        <p>activitiy calendar</p>
        <p>
          Display the activity graphs to show how often does the user applies to
          a job
        </p>
      </div>
    </div>
  );
}

export default DashboardPage;
