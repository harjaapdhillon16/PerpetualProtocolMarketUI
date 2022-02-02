import * as React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "28Jan",
    Price: 3,
  },
  {
    name: "29Jan",
    Price: 4,
  },
  {
    name: "30Jan",
    Price: 6,
  },
  {
    name: "31Jan",
    Price: 7,
  },
  {
    name: "1Feb",
    Price: 6,
  },
  {
    name: "2Feb",
    Price: 7,
  },
  {
    name: "3Feb",
    Price: 7,
  },
];

export const PriceChart = () => {
  return (
    <ResponsiveContainer height={200} width="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="natural" dataKey="Price" stroke="#ae40f2" />
      </LineChart>
    </ResponsiveContainer>
  );
};
