import styles from "./App.module.css";
import Home from "./components/Pages/Home/Home";
import { SnackbarProvider } from "notistack";

const App = () => {
  
  return (
    <SnackbarProvider>
      <div className={styles.app_wrapper}>
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;
