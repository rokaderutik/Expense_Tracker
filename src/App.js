import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeroSection from "./components/Hero Section/HeroSection";
import TransactionAndExpenseSection from "./components/TransactionAndExpenseSection/TransactionAndExpenseSection";
import AddIncomeModal from "./components/Modals/AddIncomeModal";
import ExpenseModal from "./components/Modals/AddExpenseModal";

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <HeroSection />
      <TransactionAndExpenseSection />
      <div>
        <h1>below section is for only checking modal functionality, exact positioning need to be done </h1>
        <AddIncomeModal />
        <ExpenseModal title={'Add Expenses'} isnew />
        <ExpenseModal title={'Edit Expenses'} />
      </div>
      
    </div>
  );
}

export default App;
