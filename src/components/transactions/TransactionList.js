import PropTypes from 'prop-types'
import TransactionListItem from './TransactionListItem'
import { transaction as transactionType } from '../../lib/propTypes'
import List from '../List'

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(transactionType)
}

export default function TransactionList ({ transactions }) {
  return (
    <List>
      {transactions.map(transaction => (
        <TransactionListItem
          key={transaction._id}
          transaction={transaction}
        />
      ))}
    </List>
  )
}
