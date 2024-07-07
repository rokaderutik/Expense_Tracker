import styles from "./TransactionAndExpenseSection.module.css";
import Transactions from "./Transactions";
import Expenses from "./Expenses";

const TransactionAndExpenseSection = () => {

    return (
        <div className={styles.transaction_expense_wrapper}>
            <Transactions />
            <Expenses />
        </div>
    );
};

export default TransactionAndExpenseSection;