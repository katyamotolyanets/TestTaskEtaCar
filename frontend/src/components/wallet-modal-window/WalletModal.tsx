import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";


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
        <div className={visible ? 'modal active' : 'modal'} onClick={handleClickHideModal}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <h2>My cryptocurrencies</h2>
                <table>
                    <tbody className='table'>
                        <tr className='table-row'>
                            <td>Name</td>
                            <td>Count</td>
                            <td>Delete</td>
                        </tr>
                        {
                            Object.entries(uniqueCurrencies)?.map(entry => {
                                return <tr>
                                    <td>{entry[0]}</td>
                                    <td>{entry[1] as string}</td>
                                    <td>
                                        <button onClick={() => handleClickDeleteCurrency(entry[0])}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WalletModal;