import { useState, useEffect, useContext } from "react";
import styles from "./Transactions.module.css";
import { PiPizzaLight } from "react-icons/pi";
import { PiGiftLight } from "react-icons/pi";
import { CiRollingSuitcase } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { SlPencil } from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import ExpenseModal from "../Modals/AddEditExpenseModal";

const PaginationComp = ({ updatePage, currentPage, totalPages }) => {
    const handlePrevPage = () => {
        if(currentPage > 1) {
            updatePage(prev => prev - 1);
        }
    };

    const handleNextPage = () => {
        if(currentPage !== totalPages) {
            updatePage(prev => prev + 1);
        }
    };

    return (
        <div className={styles.pagination_comp_wrapper}>
            <div className={styles.pagination_comp_box}>
                <button 
                    className={`${styles.button} ${styles.pagination_btn_color}`}
                    disabled={currentPage === 1}
                    onClick={handlePrevPage}
                >
                    <BsArrowLeft />
                </button>
                <div className={styles.pagination_number_box}>{currentPage}</div>
                <button 
                    className={`${styles.button} ${styles.pagination_btn_color}`}
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                >
                    <BsArrowRight />
                </button>
            </div>
        </div>
    );
};

const ExpenseItem = ({ details, handleDelete, handleEdit }) => {

    const formatDate = (date) => {
        const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const dateArr = date.split('-');
        return `${monthList[Number(dateArr[1])-1]} ${dateArr[2]}, ${dateArr[0]}`;
    };

    return (
        <div style={{ paddingTop: '36px' }}>
            <div className={styles.Expense_item_wrapper}>
                <div className={styles.icon_and_title_box}>
                    <div className={styles.icon}>
                        { details.category === "food" && <PiPizzaLight /> }
                        { details.category === "travel" && <CiRollingSuitcase /> }
                        { details.category === "entertainment" && <PiGiftLight /> }
                        { details.category === "other" && <TbDotsCircleHorizontal /> }
                    </div>
                    <div className={styles.title_and_date_box}>
                        <p className={styles.title}>{details.title}</p>
                        <p className={styles.date}>{formatDate(details.date)}</p>
                    </div>
                </div>
                <div className={styles.price_and_actions_box}>
                    <p className={styles.price}>
                        &#8377;{details.price}
                    </p>
                    <div className={styles.actions_box}>
                        <button 
                            className={styles.button}
                            style={{backgroundColor: '#FF3E3E'}}
                            onClick={handleDelete}
                        >
                            <RxCrossCircled />
                        </button>
                        <button 
                            className={styles.button}
                            style={{backgroundColor: '#F4BB4A'}}
                            onClick={handleEdit}
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
const Transactions = ({
    transactions, 
    editTransactions, 
    balance, 
    setBalance
}) => {
    const [editId, setEditId] = useState(0);

    // for modal
    const [isDisplayEditorModal, setIsDisplayEditorModal] = useState(false);
    
    //for pagination 
    const [currentTransactions, setCurrentTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const maxRecords = 3;
    const [totalPages, setTotalPages] = useState(0);

    const handleDelete = (id) => {
        const item = transactions.find((i) => i.id === id);
        const price = Number(item.price);
        setBalance((prev) => prev + price);

        editTransactions((prev) => prev.filter((item) => item.id !== id));
    };

    const handleEdit = (id) => {
        setEditId(id);
        setIsDisplayEditorModal(true);
    };

    useEffect(() => {
        const startIndex = (currentPage - 1) * maxRecords;
        const endIndex = Math.min(currentPage * maxRecords, transactions.length);

        setCurrentTransactions([...transactions].slice(startIndex, endIndex));
        setTotalPages(Math.ceil(transactions.length / maxRecords));
    }, [currentPage, transactions]);

    // update page if all items on current page have been deleted
    useEffect(() => {
        if (totalPages < currentPage && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
        }
    }, [totalPages]);

    return (
        <div className={styles.transaction_section_wrapper}>
            <h2 className={styles.heading}>Recent Transactions</h2>
            {
                transactions.length > 0 ? (
                <div className={styles.transaction_list_wrapper}>
                {
                    currentTransactions.map((transaction) => (
                        <ExpenseItem
                            details={transaction}
                            key={transaction.id}
                            handleDelete={() => handleDelete(transaction.id)}
                            handleEdit={() => handleEdit(transaction.id)}
                        />
                    ))
                }
                
                {
                    totalPages > 1 && (
                        <PaginationComp
                            updatePage={setCurrentPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    )
                }
                </div>
                ) : (
                    <div className={styles.transaction_list_wrapper}
                    style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                    >
                        No transactions!
                    </div>
                )
            }
            <ExpenseModal 
                editItemId={editId}
                isOpen={isDisplayEditorModal}
                setIsOpen={setIsDisplayEditorModal}
                expenseList={transactions}
                setExpenseList={editTransactions}
                balance={balance}
                setBalance={setBalance} 
            />
        </div>
    );
};

export default Transactions;