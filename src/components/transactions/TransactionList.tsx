import PropTypes from 'prop-types';
import React from 'react';
import TransactionListItem from './TransactionListItem';
import propTypes from '../../utils/propTypes';
import List from '../List';

const TransactionList = ({ transactions }: { transactions: any }) => (
  <List>
    {transactions.map((transaction: any) => (
      <TransactionListItem
        key={transaction._id}
        transaction={transaction}
      />
    ))}
  </List>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(propTypes.transactionPropType).isRequired,
};

export default TransactionList;
