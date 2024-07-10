import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./AddIncomeModal.module.css";
import { useSnackbar } from 'notistack';

const AddIncomeModal = ({ isOpen, setIsOpen, setBalance }) => {
    const [inputData, setInputData] = useState('');

    const handleClose = () => setIsOpen(false);

    const { enqueueSnackbar } = useSnackbar();

    const addBalance = (e) => {
        e.preventDefault();

        if(Number(inputData) <= 0) {
            enqueueSnackbar("Balance should be greater than 0", {
                variant: "warning"
            });
            setInputData('');
            handleClose();
            return;
        }
        setBalance(prevBalance => prevBalance + Number(inputData));

        setInputData('');
        handleClose();
    };

    const handleCancel = () => {
        setInputData('');
        handleClose();
    };

    return (
    <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className={styles.add_income_model_wrapper}>
            <h2 className={styles.title}>Add Balance</h2>
            <div className={styles.buttons_wrapper}>
                <form 
                    className={styles.buttons_wrapper}
                    onSubmit={addBalance}
                >
                    <input 
                        className={styles.input}
                        type='number'
                        value={inputData}
                        placeholder='Income Amount'
                        required
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <button
                        className={ `${styles.button} ${styles.balance_button}` }
                        type='submit'
                    >
                        Add Balance
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

export default AddIncomeModal;