import React from 'react';
import ConfirmButton from '../buttons/confirm/ConfirmButton';
import { StyledConfirmModal } from './style';
import CancelButton from '../buttons/cancel/CancelButton';

type ConfirmModalComponentProps = {
  backgroundColor?: string;
  borderColor?: string;
  borderThickness?: string;
  isConfirmModalShown: boolean;
  hideConfirmModal?: () => void;
  handleSubmitDeleteCurrency?: () => void;
};

const ConfirmModal: React.FC<ConfirmModalComponentProps> = ({
  isConfirmModalShown,
  hideConfirmModal,
  handleSubmitDeleteCurrency,
  backgroundColor,
  borderColor,
  borderThickness,
}) => {
  const handleSubmitCurrencyDeletion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    hideConfirmModal!();
    handleSubmitDeleteCurrency!();
  };
  return isConfirmModalShown ? (
    <StyledConfirmModal
      background={backgroundColor!}
      borderColor={borderColor!}
      borderThickness={borderThickness!}
    >
      <form onSubmit={handleSubmitCurrencyDeletion}>
        <h2>Are you sure you want to delete this item?</h2>
        <div className="form-button-group">
          <CancelButton onClick={hideConfirmModal}>Cancel</CancelButton>
          <ConfirmButton>Yes</ConfirmButton>
        </div>
      </form>
    </StyledConfirmModal>
  ) : null;
};

export default ConfirmModal;
