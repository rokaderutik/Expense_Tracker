import PieChartCircle from "./PieChartCircle";
import styles from "./PieChartSection.module.css";

/**
 * Label pie chart labels for more info about chart
 * @param {string} colorVal
 * color value to set it as background color
 * @param {string} title
 * title of label 
 * @returns 
 */
const Label = ({ colorVal, title }) => {
    return (
        <div className={styles.label_wrapper}>
            <div className={styles.label_color_box} style={{ backgroundColor: colorVal }}></div>
            <div className={styles.label_title}>{title}</div>
        </div>
    );
};

const PieChartLabels = () => {
    const data = [
        { name: "Food", value: 400 },
        { name: "Travel", value: 300 },
        { name: "Entertainment", value: 300 },
        { name: "Other", value: 200 },
        // { name: "Food", value: 400 },
        // { name: "Travel", value: 300 },
        // { name: "Entertainment", value: 300 },
        // { name: "Other", value: 200 }
    ];
    
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className={styles.labels_container}>
            {
                data.map((item, ind) => {
                    return (
                        <Label
                            key={item.name}
                            title={item.name}
                            colorVal={COLORS[ind % COLORS.length]}
                        />
                    );
                })
            }
        </div>
    );
};

const PieChartSection = () => {

    return (
        <div className={styles.pie_chart_section_wrapper}>
            <PieChartCircle />
            <PieChartLabels />
        </div>
    );
};

export default PieChartSection;