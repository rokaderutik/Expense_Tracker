import Card from "./Card";
import styles from "./HeroSection.module.css";
import PieChartSection from "./PieChartSection";

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
            <PieChartSection />
        </div>
    );
};

export default HeroSection;