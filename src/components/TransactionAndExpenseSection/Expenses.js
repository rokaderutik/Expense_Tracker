import styles from "./Expenses.module.css";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


// const data = [
//     { name: "Food", value: 400 },
//     { name: "Travel", value: 300 },
//     { name: "Entertainment", value: 300 },
//     { name: "Other", value: 200 },
//     // { name: "Food1", value: 400 },
//     // { name: "Travel1", value: 300 },
//     // { name: "Entertainment1", value: 300 },
//     // { name: "Other1", value: 200 }
// ];


const Expenses = ({ categorySpends }) => {

    const data = [
        { name: "Food", value: categorySpends.food },
        { name: "Entertainment", value: categorySpends.entertainment },
        { name: "Travel", value: categorySpends.travel },
        { name: "Other", value: categorySpends.other },
    ];
    
    return (
        <div className={styles.expenses_section_wrapper}>
            <h2 className={styles.heading}>Top Expenses</h2>
            <div className={styles.expenses_chart_wrapper}>
            {data?.length ? (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical">
                    <XAxis type="number" axisLine={false} display="none" />
                    <YAxis
                        type="category"
                        width={110}
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                    />
                    <Bar dataKey="value" fill="#8884d8" barSize={25} radius={[0, 12.5, 12.5, 0]} />
                    </BarChart>
                </ResponsiveContainer>
                ) : (
                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    }}
                >
                    No transactions!
                </div>
                )
            }
            </div>
        </div>
    );
};

export default Expenses;