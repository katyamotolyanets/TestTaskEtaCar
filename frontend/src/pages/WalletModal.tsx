import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import Table, {StyledTd, StyledTr} from "../components/table/Table";


const WalletModal:React.FC = () => {
    const {visible, currencies} = useTypedSelector(state => state.wallet);
    const {setWalletModalInvisible, deleteCurrencyFromWallet} = useActions();

    let uniqueCurrencies = currencies.reduce((previousValue, currentValue) => {
        previousValue[currentValue.id] = previousValue[currentValue.id] || 0;
        previousValue[currentValue.id] += currentValue.count;
        return previousValue;
    }, {})

    useEffect(() => {

    }, [currencies])
    const handleClickHideModal = () => {
        setWalletModalInvisible();
    };

    const handleClickDeleteCurrency = (id: string) => {
        deleteCurrencyFromWallet(id);
    };

    return (
        <Modal isActive={visible} handleClickHideModal={handleClickHideModal}>
            <h2>My cryptocurrencies</h2>
            <Table firstParam='Name' secondParam='Count' thirdParam='Delete'>
                {
                    Object.entries(uniqueCurrencies)?.map(entry => {
                        return <StyledTr>
                            <StyledTd>{entry[0]}</StyledTd>
                            <StyledTd>{entry[1] as string}</StyledTd>
                            <StyledTd>
                                <Button onClick={() => handleClickDeleteCurrency(entry[0])}>
                                    Delete
                                </Button>
                            </StyledTd>
                        </StyledTr>
                    })
                }
            </Table>
        </Modal>
    );
};

export default WalletModal;