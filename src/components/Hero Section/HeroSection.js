import Card from "./Card";
import styles from "./HeroSection.module.css";

const HeroSection = () => {

    return (
        <div className={styles.hero_section_wrapper}>
            <Card 
                cardTitle="Wallet Balance"
                buttonTitle="Income"
            />
            <Card 
                cardTitle="Expenses"
                buttonTitle="Expense"
            />
        </div>
    );
};

export default HeroSection;