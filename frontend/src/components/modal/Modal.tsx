import React, { useEffect } from 'react';
import { StyledModal } from './style';

type ModalComponentProps = {
  children: any;
  isActive: string | null | boolean;
  handleClickHideModal: () => void;
};

const Modal: React.FC<ModalComponentProps> = ({
  children,
  isActive,
  handleClickHideModal,
}) => {
  useEffect(() => {
    document.addEventListener<any>('keydown', handleKeyDown);
    return function () {
      document.removeEventListener<any>('keydown', handleKeyDown);
    };
  }, [isActive]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 27) handleClickHideModal();
  };

  return isActive ? (
    <StyledModal className='modal' onClick={handleClickHideModal}>
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </StyledModal>
  ) : null;
};

export default Modal;
