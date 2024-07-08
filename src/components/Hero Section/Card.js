import styles from "./Card.module.css";

/**
 * Card component
 * @param {string} cardTitle
 * title of card
 * @param {string} buttonTitle
 * title of button 
 * @returns 
 */
const Card = ({ cardTitle, buttonTitle }) => {

    return (
        <div className={styles.card_body}>
            <p className={styles.title}>
                {cardTitle}: <span 
                                className={cardTitle === 'Expenses' ? styles.expense_text : styles.income_text}
                            >
                                &#8377;5000
                            </span>
            </p>
            <button 
                className={`${styles.button} ${cardTitle === 'Expenses' ? styles.expense_button : styles.income_button}`}
                onClick={() => {}}
            >
                + Add {buttonTitle}
            </button>
        </div>
    );
};

export default Card;