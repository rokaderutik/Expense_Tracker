import styles from "./TransactionAndExpenseSection.module.css";
import Transactions from "./Transactions";
import Expenses from "./Expenses";

const TransactionAndExpenseSection = ({ 
    transactions, 
    editTransactions, 
    balance, 
    setBalance, 
    categorySpends 
}) => {

    return (
        <div className={styles.transaction_expense_wrapper}>
            <Transactions 
                transactions={transactions}
                editTransactions={editTransactions}
                balance={balance}
                setBalance={setBalance}
            />
            <Expenses 
                categorySpends={categorySpends}
            />
        </div>
    );
};

export default TransactionAndExpenseSection;