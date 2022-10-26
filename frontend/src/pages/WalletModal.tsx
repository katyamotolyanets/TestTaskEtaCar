import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {formatStringToNumber} from "../utils/utilities";
import Button from "../components/buttons/Button";
import Modal from "../components/modal/Modal";
import Table from "../components/table/Table";
import ConfirmModal from "../components/modal/ConfirmModal";
import {WalletCurrencyInfo} from "../types/wallet";
import {StyledTd, StyledTr } from '../components/table/style';
import {trpc} from "../trpc";

const WalletModal:React.FC = () => {
    const {setWalletModalInvisible, deleteCurrencyFromWallet, setCurrentWalletPrice, fetchWalletCurrenciesData} = useActions();
    const [isConfirmModalShown, setConfirmModalShown] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | undefined>(undefined);
    const {visible, currencies, currentWalletPrice} = useTypedSelector(state => state.wallet);
    const wallet: WalletCurrencyInfo[] = JSON.parse(localStorage.getItem('wallet') as string) || [];
    const {data: topThreeCurrencies} = trpc.useQuery(['getLimitCurrenciesWithOffset', {limit: 3, offset: 0}]);
    const {data: currentCurrencies} = trpc.useQuery(['fetchCurrenciesFromArray', wallet]);

    useEffect(() => {
        fetchWalletCurrenciesData(topThreeCurrencies, currentCurrencies!);
        setCurrentWalletPrice();
    }, [])

    const uniqueCurrencies = currencies.reduce((previousValue, currentValue) => {
        previousValue[currentValue.id] = previousValue[currentValue.id] || 0;
        (previousValue[currentValue.id] as number) += currentValue.count
        return previousValue;
    }, {} as WalletCurrencyInfo);

    const handleClickHideModal = () => {
        setWalletModalInvisible();
        setConfirmModalShown(false);
    };

    const handleClickDeleteCurrency = (id: string | undefined) => {
        deleteCurrencyFromWallet(id!);
        fetchWalletCurrenciesData(topThreeCurrencies, currentCurrencies!);
        setCurrentWalletPrice();
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
                                                <Button onClick={() => showConfirmModal(entry[0])} border={true}>
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