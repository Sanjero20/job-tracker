import { getOverview } from "@/services/dashboard.service";
import { useQuery } from "@tanstack/react-query";

function ApplicationsOverview() {
  const { data } = useQuery({
    queryKey: ["overview"],
    queryFn: getOverview,
  });

  return (
    <div className="grid h-full w-full grid-cols-4">
      <div className="flex flex-col">
        <p className="text-xl font-bold">{data?.total || 0}</p>
        <p>Application submitted</p>
      </div>

      {/*  */}
      <div className="flex flex-col">
        <p className="text-xl font-bold">{data?.ongoing || 0}</p>
        <p>Ongoing applications</p>
      </div>

      {/*  */}
      <div className="flex flex-col">
        <p className="text-xl font-bold">{data?.rejected || 0}</p>
        <p>Rejected Applications</p>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-bold">{data?.offered || 0}</p>
        <p>Job Offers</p>
      </div>
    </div>
  );
}

export default ApplicationsOverview;
