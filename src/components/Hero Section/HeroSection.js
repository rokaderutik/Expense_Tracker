import Card from "./Card";
import styles from "./HeroSection.module.css";
import PieChartComponent from "./PieChartComponent";

const HeroSection = ({ balance, expense, handleAddIncome, handleAddEditExpense, categorySpends }) => {

    return (
        <>
            <div className={styles.large_devices}>
                {/* view on large devices */}
                <div className={styles.hero_section_wrapper}>
                    <Card 
                        cardTitle="Wallet Balance"
                        buttonTitle="Income"
                        amount={balance}
                        handleClick={handleAddIncome}
                    />
                    
                    <Card 
                        cardTitle="Expenses"
                        buttonTitle="Expense"
                        amount={expense}
                        handleClick={handleAddEditExpense}
                    />
                    
                    <PieChartComponent 
                        categorySpends={categorySpends}
                    />
                </div>
            </div>
            <div className={styles.medium_devices}>
                <div className={styles.medium_devices_wrapper}>
                    <div className={styles.medium_devices_card_wrapper}>
                        <Card 
                            cardTitle="Wallet Balance"
                            buttonTitle="Income"
                            amount={balance}
                            handleClick={handleAddIncome}
                        />
                        
                        <Card 
                            cardTitle="Expenses"
                            buttonTitle="Expense"
                            amount={expense}
                            handleClick={handleAddEditExpense}
                        />
                    </div>
                    <PieChartComponent 
                        categorySpends={categorySpends}
                    />
                </div>
            </div>
        </>
    );
};

export default HeroSection;