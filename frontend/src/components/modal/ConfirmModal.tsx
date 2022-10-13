import React from 'react';
import ConfirmButton from "../buttons/ConfirmButton";
import CancelButton from "../buttons/CancelButton";
import { StyledConfirmModal } from './style';

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
                        <CancelButton handleClick={hideConfirmModal}>Cancel</CancelButton>
                        <ConfirmButton type='submit' value='Yes'/>
                    </div>
                </form>
            </StyledConfirmModal>
            : null
    );
};

export default ConfirmModal;