import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Applied",
    count: 100,
  },
  {
    name: "In progress",
    count: 2,
  },
  {
    name: "Interviewed",
    count: 0,
  },
  {
    name: "Offer",
    count: 4,
  },
  {
    name: "Not Selected",
    count: 7,
  },
];

function StatusBarGraph() {
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
        <YAxis type="number" />

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
