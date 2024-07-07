import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeroSection from "./components/Hero Section/HeroSection";
import TransactionAndExpenseSection from "./components/TransactionAndExpenseSection/TransactionAndExpenseSection";

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <HeroSection />
      <TransactionAndExpenseSection />
    </div>
  );
}

export default App;
