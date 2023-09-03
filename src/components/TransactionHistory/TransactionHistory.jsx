import PropTypes from 'prop-types';
import { TableTbody, TableThead, TransactionHistoryTable } from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryTable>
            <TableThead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableThead>
            <TableTbody>
                {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                ))}
            </TableTbody>
        </TransactionHistoryTable>
    )
}   

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}