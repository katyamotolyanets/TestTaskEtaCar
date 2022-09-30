import React, {Dispatch, SetStateAction} from 'react';

export interface ModalComponentProps {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>,
}

const WalletModal = ({active, setActive}: ModalComponentProps) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <h2>My cryptocurrencies</h2>
            </div>
        </div>
    );
};

export default WalletModal;