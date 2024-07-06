import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeroSection from "./components/Hero Section/HeroSection";

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
