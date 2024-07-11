import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./AddEditExpenseModal.module.css";
import { useSnackbar } from 'notistack';

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
const ExpenseModal = ({  
    isOpen,
    setIsOpen,
    expenseList,
    setExpenseList,
    balance,
    setBalance,
    editItemId
}) => {
    const initialInputData = editItemId
        ?   expenseList.find((item) => item.id === editItemId)
        :   {
                title: '',
                price: '',
                category: '',
                date: ''
            };   
    
    const [inputData, setInputData] = useState(initialInputData);

    const { enqueueSnackbar } = useSnackbar();

    // to fill form with details of expense to edit
    useEffect(() => {
        if(editItemId) {
            const initialInputData = expenseList.find((item) => item.id === editItemId);
            setInputData(initialInputData);
        }
    }, [editItemId]);

    const handleClose = () => setIsOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };
    
    const addExpense = (e) => {
        e.preventDefault();

        if(balance < Number(inputData.price)) {
            enqueueSnackbar(
                "Wallet balance is less than price, can not do operation",
                {
                    variant: "warning"
                }
            );

            setInputData({
                title: '',
                price: '',
                category: '',
                date: ''
            });

            handleClose();

            return;
        }

        setBalance((prevBalance) => prevBalance - Number(inputData.price));

        const lastItemId = expenseList.length > 0 ? expenseList[0].id : 0;
        setExpenseList(
            (prevList) => [{...inputData, id: lastItemId + 1}, ...prevList]
        );

        setInputData({
            title: '',
            price: '',
            category: '',
            date: ''
        });

        handleClose();
    };

    const editExpense = (e) => {
        e.preventDefault();

        const updatedList = expenseList.map((item) => {
                if (item.id == editItemId) {
                    const priceDifference = item.price - Number(inputData.price);
        
                    if (priceDifference < 0 && Math.abs(priceDifference) > balance) {
                        enqueueSnackbar("Price should not exceed the wallet balance", {
                            variant: "warning",
                        });

                        setInputData({
                            title: '',
                            price: '',
                            category: '',
                            date: ''
                        });

                        handleClose();
                        
                        return { ...item };
                    }
        
                    setBalance((prevBalance) => prevBalance + priceDifference);
                    return { ...inputData, id: editItemId };
                } else {
                    return item;
                }
        });
        
        setExpenseList(updatedList);

        setInputData({
            title: '',
            price: '',
            category: '',
            date: ''
        });

        handleClose();
            
    };

    const handleCancel = () => {
        setInputData({
            title: '',
            price: '',
            category: '',
            date: ''
        });

        handleClose();
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.expense_model_wrapper}>
                <h2 className={styles.title}>
                    { editItemId ? "Edit Expense" : "Add Expense" }
                </h2>
                <div className={styles.buttons_wrapper}>
                    <form 
                        className={styles.buttons_wrapper}
                        onSubmit={ editItemId ? editExpense : addExpense }
                    >
                        <input 
                            className={styles.input}
                            type='text'
                            name='title'
                            value={inputData.title}
                            placeholder='Title'
                            required
                            onChange={handleChange}
                        />
                        <input 
                            className={styles.input}
                            type='number'
                            name='price'
                            value={inputData.price}
                            placeholder='Price'
                            required
                            onChange={handleChange}
                        />
                        <select 
                            name='category'
                            className={styles.select}
                            value={inputData.category}
                            required
                            onChange={handleChange}
                        >
                            <option value='none'>Select Category</option>
                            <option value="food">Food</option>
                            <option value="travel">Travel</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="other">Other</option>
                        </select>
                        <input 
                            className={styles.input}
                            type='date'
                            name='date'
                            value={inputData.date}
                            placeholder='dd/mm/yyyy'
                            required
                            onChange={handleChange}
                        />
                        <button
                            className={ `${styles.button} ${styles.expense_button}` }
                            type='submit'
                        >
                            Add Expense
                        </button>
                        <button
                            className={ `${styles.button} ${styles.cancel_button}` }
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </Box>
        </Modal>
    );
}

export default ExpenseModal;