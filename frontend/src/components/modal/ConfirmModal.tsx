import React from 'react';
import styled from "styled-components";
import ConfirmButton from "../buttons/ConfirmButton";
import CancelButton from "../buttons/CancelButton";

const StyledConfirmModal = styled.div`
  position: fixed;
  top: 30vh;
  left: 35vw;
  border-radius: 1em;
  background-color: #fff;
  max-height: 50%;
  max-width: 30%;
  form {
    display: flex;
    flex-direction: column;
    h2 {
      margin: 0 3%;
      padding-top: 3%;
    }
    .form-button-group {
      display: flex;
      justify-content: center;
      button, input {
        margin: 0 5%;
      }
    }
  }
`

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