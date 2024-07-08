import styles from "./Expenses.module.css";
// import { BarChart } from '@mui/x-charts/BarChart';
import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { name: "Food", value: 400 },
    { name: "Travel", value: 300 },
    { name: "Entertainment", value: 300 },
    { name: "Other", value: 200 },
    // { name: "Food1", value: 400 },
    // { name: "Travel1", value: 300 },
    // { name: "Entertainment1", value: 300 },
    // { name: "Other1", value: 200 }
];

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];

// const BarChartComponent = () => {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       series={[
        
//         { data: uData,  id: 'uvId' },
//       ]}
//       yAxis={[{ data: xLabels, scaleType: 'band', disableLine: true, disableTicks: true }]}
//       xAxis={[{disableLine: true, disableTicks: true, }]}
//       borderRadius={50}
//       layout='horizontal'
//       bottomAxis={null}
      
//     />
//   );
// }

const Expenses = () => {

    return (
        <div className={styles.expenses_section_wrapper}>
            <h2 className={styles.heading}>Top Expenses</h2>
            <div className={styles.expenses_chart_wrapper}>
                {/* <BarChartComponent /> */}
            </div>
        </div>
    );
};

export default Expenses;

// import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';



// recharts bar chart code (not working as required)
// import {
//   ComposedChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";

// const BarChartComp = () => {
//     return (
//         <ComposedChart
//             layout="vertical"
//             className={styles.composed_chart_component} /* changing size using css media queries, but passing width and height as it is compulsory props*/
//             width={417}
//             height={345}
//             data={data}
//             margin={{
//                 top: 8,
//                 right: 20,
//                 bottom: 20,
//                 left: 20,
//             }}
//         >
//         <CartesianGrid  
//             horizontal={false}
//             vertical={false}
//         />
//         <XAxis type="number" hide />
//         <YAxis
//             dataKey="name"
//             type="category"
//             scale="band"
//             tickLine={false}
//             axisLine={false}
//             dy={38}
//         />
//         <Bar 
//             dataKey="value" 
//             barSize={20} 
//             fill="#8784D2" 
//             radius={[0, 10, 10, 0]} 
//         />
//         </ComposedChart>
//     );
// };