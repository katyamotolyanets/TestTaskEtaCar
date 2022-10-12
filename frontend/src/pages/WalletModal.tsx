import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {formatStringToNumber} from "../services/service";
import Button from "../components/buttons/Button";
import Modal from "../components/modal/Modal";
import Table, {StyledTd, StyledTr} from "../components/table/Table";
import ConfirmModal from "../components/modal/ConfirmModal";


const WalletModal:React.FC = () => {
    const [isConfirmModalShown, setConfirmModalShown] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | undefined>(undefined);
    const {visible, currencies, currentWalletPrice} = useTypedSelector(state => state.wallet);
    const {setWalletModalInvisible, deleteCurrencyFromWallet, setCurrentWalletPrice, fetchWalletCurrenciesData} = useActions();

    useEffect(() => {
        fetchWalletCurrenciesData();
        setCurrentWalletPrice();
    }, [])

    const uniqueCurrencies = currencies.reduce((previousValue, currentValue) => {
        previousValue[currentValue.id] = previousValue[currentValue.id] || 0;
        previousValue[currentValue.id] += currentValue.count;
        return previousValue;
    }, {});

    const handleClickHideModal = () => {
        setWalletModalInvisible();
        setConfirmModalShown(false);
    };

    const handleClickDeleteCurrency = (id: string | undefined) => {
        if (id != undefined) deleteCurrencyFromWallet(id);
        fetchWalletCurrenciesData();
        setCurrentWalletPrice();
        fetchWalletCurrenciesData();
    };

    const showConfirmModal = (id: string) => {
        setConfirmModalShown(true);
        setItemToDelete(id)
    }

    return (
        <Modal isActive={visible} handleClickHideModal={handleClickHideModal}>
            {isConfirmModalShown ?
                <ConfirmModal isConfirmModalShown={isConfirmModalShown}
                              hideConfirmModal={() => setConfirmModalShown(false)}
                              handleSubmitDeleteCurrency={() => handleClickDeleteCurrency(itemToDelete)}/>
                :
                <div>
                    <h2>My cryptocurrencies</h2>
                    <div>Balance: {formatStringToNumber(currentWalletPrice.toString())} USD</div>
                    {
                        currencies.length > 0 ?
                            <Table firstParam='Name' secondParam='Count' thirdParam='Delete'>
                                {
                                    Object.entries(uniqueCurrencies)?.map(entry => {
                                        return <StyledTr>
                                            <StyledTd>{entry[0]}</StyledTd>
                                            <StyledTd className='count-of-currencies'>{entry[1] as string}</StyledTd>
                                            <StyledTd>
                                                <Button onClick={() => showConfirmModal(entry[0])}>
                                                    Delete
                                                </Button>
                                            </StyledTd>
                                        </StyledTr>
                                    })
                                }
                            </Table>
                            :
                            <div>
                                You haven't bought anything yet :(
                            </div>
                    }
                </div>
            }
        </Modal>
    );
};

export default WalletModal;