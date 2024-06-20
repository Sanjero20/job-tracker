import { getStatusGraphData } from "@/services/dashboard.service";
import { useQuery } from "@tanstack/react-query";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function StatusBarGraph() {
  const { data } = useQuery({
    queryKey: ["status-graph"],
    queryFn: getStatusGraphData,
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        height={500}
        data={data}
        barGap={100}
        barCategoryGap={8}
        margin={{
          left: -25,
        }}
      >
        <XAxis dataKey={"name"} style={{ fontSize: 12 }} />
        <YAxis type="number" allowDecimals={false} />

        <Tooltip />
        <Bar
          dataKey={"count"}
          fill="#000000"
          barSize={50}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default StatusBarGraph;
