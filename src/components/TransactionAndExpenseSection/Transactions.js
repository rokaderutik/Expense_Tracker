import styles from "./Transaction.module.css";
import { PiPizzaLight } from "react-icons/pi";
import { PiGiftLight } from "react-icons/pi";
import { CiRollingSuitcase } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { SlPencil } from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const PaginationComp = () => {

    return (
        <div className={styles.pagination_comp_wrapper}>
            <div className={styles.pagination_comp_box}>
                <button className={`${styles.button} ${styles.pagination_btn_color}`}>
                    <BsArrowLeft />
                </button>
                <div className={styles.pagination_number_box}>{1}</div>
                <button className={`${styles.button} ${styles.pagination_btn_color}`}>
                    <BsArrowRight />
                </button>
            </div>
        </div>
    );
};

const ExpenseItem = () => {

    return (
        <div style={{ paddingTop: '36px' }}>
            <div className={styles.Expense_item_wrapper}>
                <div className={styles.icon_and_title_box}>
                    <div className={styles.icon}>
                        <PiGiftLight />
                    </div>
                    <div className={styles.title_and_date_box}>
                        <p className={styles.title}>Movie</p>
                        <p className={styles.date}>March 21, 2024</p>
                    </div>
                </div>
                <div className={styles.price_and_actions_box}>
                    <p className={styles.price}>
                        &#8377;{150}
                    </p>
                    <div className={styles.actions_box}>
                        <button 
                            className={styles.button}
                            style={{'background-color': '#FF3E3E'}}
                        >
                            <RxCrossCircled />
                        </button>
                        <button 
                            className={styles.button}
                            style={{'background-color': '#F4BB4A'}}
                        >
                            <SlPencil />
                        </button>
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    );
};

/**
 * Transactions, Component for Recent Transaction section
 * @returns 
 */
const Transactions = () => {

    return (
        <div className={styles.transaction_section_wrapper}>
            <h2 className={styles.heading}>Recent Transactions</h2>
            <div className={styles.transaction_list_wrapper}>

                <ExpenseItem />
                <ExpenseItem />
                <ExpenseItem />

                <PaginationComp />
            </div>
        </div>
    );
};

export default Transactions;