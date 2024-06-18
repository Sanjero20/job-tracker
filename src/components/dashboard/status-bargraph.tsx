import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Props {}

const data = [
  {
    name: "Submitted",
    count: 100,
  },
  {
    name: "In progress",
    count: 2,
  },
  {
    name: "Under Review",
    count: 19,
  },
  {
    name: "Interviewed",
    count: 0,
  },
  {
    name: "Rejected",
    count: 7,
  },
  {
    name: "Withdrawn",
    count: 5,
  },
  {
    name: "Offer",
    count: 4,
  },
];

function StatusBarGraph({}: Props) {
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
