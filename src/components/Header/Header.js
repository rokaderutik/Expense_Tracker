import styles from "./Header.module.css";

const Header = () => {

    return (
        <div className={styles.header_wrapper}>
            <h1 className={styles.title}>Expense Tracker</h1>
        </div>
    );
};

export default Header;