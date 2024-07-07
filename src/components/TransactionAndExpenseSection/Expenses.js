import styles from "./Expenses.module.css";

const Expenses = () => {

    return (
        <div className={styles.expenses_section_wrapper}>
            <h2 className={styles.heading}>Top Expenses</h2>
            <div className={styles.expenses_chart_wrapper}>

            </div>
        </div>
    );
};

export default Expenses;