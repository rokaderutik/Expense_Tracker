import styles from "./Card.module.css";

/**
 * Card component
 * @param {string} cardTitle
 * title of card
 * @param {string} buttonTitle
 * title of button 
 * @param {number} amount
 * balance or expense amount
 * @param {function} updateAmount
 * function for updating respective amounts
 * @returns 
 */
const Card = ({ cardTitle, buttonTitle, amount, handleClick }) => {   

    return (
        <div className={styles.card_body}>
            <p className={styles.title}>
                {`${cardTitle}: `}
                <span 
                    className={cardTitle === 'Expenses' ? styles.expense_text : styles.income_text}
                >
                    &#8377;{amount}
                </span>
            </p>
            <button 
                className={`${styles.button} ${cardTitle === 'Expenses' ? styles.expense_button : styles.income_button}`}
                onClick={handleClick}
            >
                {`+ Add ${buttonTitle}`}
            </button>
        </div>
    );
};

export default Card;