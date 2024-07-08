import { Card } from "@/components/ui/card";
import { getStatistics } from "@/services/dashboard.service";
import { useQuery } from "@tanstack/react-query";

function Statistics() {
  const { data } = useQuery({
    queryKey: ["statistics"],
    queryFn: getStatistics,
  });

  return (
    <>
      <Card className="relative flex h-full w-full items-center justify-center p-4">
        <p className="absolute top-4">Interview Rate</p>
        <p className="text-2xl font-bold">{data?.interview_rate || 0}%</p>
      </Card>

      <Card className="relative flex h-full w-full items-center justify-center p-4">
        <p className="absolute top-4">Rejection Rate</p>
        <p className="text-2xl font-bold">{data?.rejection_rate || 0}%</p>
      </Card>
    </>
  );
}

export default Statistics;
