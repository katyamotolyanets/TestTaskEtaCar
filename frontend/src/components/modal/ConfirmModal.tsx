import React from 'react';
import ConfirmButton from "../buttons/ConfirmButton";
import { StyledConfirmModal } from './style';
import CancelButton from "../buttons/CancelButton";

type ConfirmModalComponentProps = {
    isConfirmModalShown: boolean,
    hideConfirmModal: () => void,
    handleSubmitDeleteCurrency: () => void
}

const ConfirmModal: React.FC<ConfirmModalComponentProps> = ({isConfirmModalShown, hideConfirmModal, handleSubmitDeleteCurrency}) => {
    const handleSubmitCurrencyDeletion = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        hideConfirmModal();
        handleSubmitDeleteCurrency();
    }
    return (
        isConfirmModalShown ?
            <StyledConfirmModal>
                <form onSubmit={handleSubmitCurrencyDeletion}>
                    <h2>Are you sure you want to delete this item?</h2>
                    <div className='form-button-group'>
                        <CancelButton onClick={hideConfirmModal}>Cancel</CancelButton>
                        <ConfirmButton>Yes</ConfirmButton>
                    </div>
                </form>
            </StyledConfirmModal>
            : null
    );
};

export default ConfirmModal;