import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2020",
    uv: 4000,
    dr: 500,
    amt: 2000,
  },
  {
    name: "2021",
    uv: 3000,
    dr: 1000,
    amt: 3000,
  },
  {
    name: "2022",
    uv: 2000,
    dr: 1500,
    amt: 4000,
  },
  {
    name: "2023",
    uv: 2780,
    dr: 2000,
    amt: 5000,
  },
];

export default class Barchart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8";

  render() {
    return (
      <div className="w-1/2 h-96 p-8 flex flex-col gap-4 ">
        <p className="font-bold text-xl ">Growth of Enterprises</p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="dr" fill="#85E0A3" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
