import cx from 'classnames'
import numberFormat from 'number-format.js'
import moment from 'moment'

import { transaction as transactionType } from '../../lib/propTypes'
import styles from './TransactionListItem.module.scss'
import Link from 'next/link'

export default function TransactionListItem ({ transaction }) {
  if (!transaction) return null
  const { payee, amount, date, category, account } = transaction

  return (
    <li>
      <div className={cx('flex', 'justify-between')}>
        <p>{payee}</p>
        <p className={cx({
          [styles.expenseAmount]: amount < 0,
          [styles.incomeAmount]: amount > 0
        })}>{numberFormat('$ #,###.00', amount)}</p>
      </div>
      <p className={styles.transactionDetails}>
        <span>{moment(date).format('MM/DD/YYYY')}</span>
        <span>
          <Link href={`/transactions?category${category.name}`}>
            <a>{category.name}</a>
          </Link>
        </span>
        <span>{account.name}</span>
      </p>
    </li>
  )
}

TransactionListItem.propTypes = {
  transaction: transactionType
}
