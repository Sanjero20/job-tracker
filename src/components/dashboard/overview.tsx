import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ApplicationsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>

      <CardContent className="grid md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col">
          <p className="text-xl font-bold">400</p>
          <p>Application submitted</p>
        </div>

        {/*  */}
        <div className="flex flex-col">
          <p className="text-xl font-bold">3</p>
          <p>Ongoing applications</p>
        </div>

        {/*  */}
        <div className="flex flex-col">
          <p className="text-xl font-bold">39</p>
          <p>Rejected Applications</p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold">12</p>
          <p>Job Offers</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ApplicationsOverview;
