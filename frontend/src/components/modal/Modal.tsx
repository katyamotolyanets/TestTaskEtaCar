import React, {useEffect} from 'react';
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
  text-align: center;
  h2 {
    text-align: center;
    font-size: 3vmin;
    margin: 5% 0;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  div {
    margin: 5% 0;
  }
`

interface ModalComponentProps {
    children: any,
    isActive: string | null | boolean,
    handleClickHideModal: () => void,
}

const Modal: React.FC<ModalComponentProps> = ({children, isActive, handleClickHideModal}) => {
    useEffect(() => {
        document.addEventListener<any>('keydown', handleKeyDown);
        return function () {
            document.removeEventListener<any>('keydown', handleKeyDown);
        }
    }, [isActive]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.keyCode === 27)
            handleClickHideModal()
    };

    return (
        isActive ?
            <StyledModal className='modal' onClick={handleClickHideModal}>
                <div className='modal__content' onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </StyledModal>
            : null
    );
};

export default Modal;