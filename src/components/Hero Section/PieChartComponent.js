import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import styles from "./PieChartComponent.module.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
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

function PieChartComponent({ categorySpends }) {
  const data = [
    { name: "Food", value: categorySpends.food },
    { name: "Entertainment", value: categorySpends.entertainment },
    { name: "Travel", value: categorySpends.travel },
    { name: "Other", value: categorySpends.other },
  ];

  const spendAll = data.reduce((acc, obj) => acc + obj.value, 0);
  if (spendAll === 0) {
    return (
      <div className={styles.pie_chart_section_wrapper}>
          No transactions!
      </div>
    );
  }

  return (
    <div className={styles.pie_chart_section_wrapper}>
        <ResponsiveContainer width="100%" height={240}>
            <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend iconType="rect" verticalAlign="bottom" />
            </PieChart>
        </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;