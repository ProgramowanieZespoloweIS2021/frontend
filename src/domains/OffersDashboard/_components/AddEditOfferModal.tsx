import React from 'react';
import { Modal } from '@material-ui/core';
import { ModalCard } from './AddEditOfferModal.styled';

interface IProps {
    open: boolean;
    handleClose: () => void;
}

const AddEditOfferModal: React.FC<IProps> = ({ open, handleClose }) => {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ModalCard>
                    <h1>Add offer</h1>
                    <p>The best place to add</p>
                </ModalCard>
            </Modal>
        </>
    );
};

export default AddEditOfferModal;
