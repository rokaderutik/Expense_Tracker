import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

import styles from "./PieChartCircle.module.css";

const data = [
  { name: "Food", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Entertainment", value: 300 },
  { name: "Other", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartCircle() {
  return (
    <PieChart  className={styles.pie_chart} width={205} height={205}> {/* changing size using css media queries, but passing width and height as it is compulsory props*/}
      <Pie
        data={data}
        cx={'49%'}
        cy={'49%'}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={'100%'}
        // fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
