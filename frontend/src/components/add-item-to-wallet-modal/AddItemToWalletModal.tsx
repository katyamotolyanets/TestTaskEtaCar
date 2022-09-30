import React from 'react';
import {ModalComponentProps} from "../wallet-modal-window/WalletModal";

const AddItemToWalletModal = ({active, setActive}: ModalComponentProps) => {
    return (
        <div>
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className='modal__content' onClick={e => e.stopPropagation()}>
                    <input type="number"/>
                </div>
            </div>
        </div>
    );
};

export default AddItemToWalletModal;