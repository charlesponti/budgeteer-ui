import cx from 'classnames';
import moment from 'moment';
import numberFormat from 'number-format.js';
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from '../../utils/propTypes';
import styles from './TransactionListItem.module.scss';

const TransactionListItem = ({ transaction }: { transaction: any }) => {
  if (!transaction) return null;
  const {
    payee, amount, date, category, account,
  } = transaction;

  return (
    <li>
      <div className={cx('flex', 'justify-between')}>
        <p>{payee}</p>
        <p className={cx({
          [styles.expenseAmount]: amount < 0,
          [styles.incomeAmount]: amount > 0,
        })}
        >
          {numberFormat('$ #,###.00', amount)}

        </p>
      </div>
      <p className={styles.transactionDetails}>
        <span>{moment(date).format('MM/DD/YYYY')}</span>
        <span>
          <Link to={`/transactions?category${category.name}`}>
            {category.name}
          </Link>
        </span>
        <span>{account.name}</span>
      </p>
    </li>
  );
};

TransactionListItem.propTypes = {
  transaction: propTypes.transactionPropType,
};

export default TransactionListItem;
