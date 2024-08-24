import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stock = ({
  data,
}: {
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}) => {
  return (
    <div className="w-1/2 h-96 p-8 flex flex-col gap-4 mx-auto ">
      <p className="font-bold text-xl">Unemployeement Rate</p>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#85E0A3" fill="#85E0A3" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Stock;
