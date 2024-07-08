import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./AddExpenseModal.module.css";

/**
 * ExpenseModal for add expense and edit expense components
 * @param {string} title
 * Add Expense or Edit Expense
 * @param {boolean} isNew
 * true if add new expense and false if edit already exist expense
 * @param {object} editExpenseData
 * already present data of expense which we wan't to edit 
 * @returns 
 */
const ExpenseModal = ({ title, isNew, editExpenseData }) => {
    let initialInputData = {
        title: "",
        price: "",
        category: "",
        date: ""
    };
    // if(!isNew) {
    //     initialInputData = editExpenseData;
    // }
    const [inputData, setInputData] = useState(initialInputData);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };
    console.log(inputData)

    const addExpense = () => {
        // update to local storage, and then do below

        setInputData('');
        handleClose();
    };

    const handleCancel = () => {
        setInputData('');
        handleClose();
    };

    return (
        <div>
        <button onClick={handleOpen}>Add/Edit Expense</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.expense_model_wrapper}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.buttons_wrapper}>
                    <input 
                        className={styles.input}
                        type='text'
                        name='title'
                        value={inputData.title}
                        placeholder='Title'
                        onChange={handleChange}
                    />
                    <input 
                        className={styles.input}
                        type='number'
                        name='price'
                        value={inputData.price}
                        placeholder='Price'
                        onChange={handleChange}
                    />
                    <select 
                        name='category'
                        className={styles.select}
                        value={inputData.category}
                        onChange={handleChange}
                    >
                        <option value='none'>Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        
                    </select>
                    <input 
                        className={styles.input}
                        type='date'
                        name='date'
                        value={inputData.date}
                        placeholder='dd/mm/yyyy'
                        onChange={handleChange}
                    />
                    <button
                        className={ `${styles.button} ${styles.expense_button}` }
                        onClick={addExpense}
                    >
                        Add Expense
                    </button>
                    <button
                        className={ `${styles.button} ${styles.cancel_button}` }
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </Box>
        </Modal>
        </div>
    );
}

export default ExpenseModal;