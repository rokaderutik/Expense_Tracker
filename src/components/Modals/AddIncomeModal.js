import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./AddIncomeModal.module.css";

const AddIncomeModal = () => {
    const [inputData, setInputData] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addBalance = () => {
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
        <button onClick={handleOpen}>Add Income</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.add_income_model_wrapper}>
                <h2 className={styles.title}>Add Balance</h2>
                <div className={styles.buttons_wrapper}>
                    <input 
                        className={styles.input}
                        type='number'
                        value={inputData}
                        placeholder='Income Amount'
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <button
                        className={ `${styles.button} ${styles.balance_button}` }
                        onClick={addBalance}
                    >
                        Add Balance
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

export default AddIncomeModal;