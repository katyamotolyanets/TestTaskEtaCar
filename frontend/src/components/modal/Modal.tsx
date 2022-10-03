import React from 'react';
import styled from "styled-components";

const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  opacity: 1;
`

interface ModalComponentProps {
    children: any,
    isActive: string | null | boolean,
    handleClickHideModal: () => void,
}

const Modal: React.FC<ModalComponentProps> = ({children, isActive, handleClickHideModal}) => {
    return (
        <StyledModal className={isActive ? 'modal active' : 'modal'}
             onClick={handleClickHideModal}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </StyledModal>
    );
};

export default Modal;