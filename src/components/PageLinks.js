import Link from 'next/link'
import cx from 'classnames'
import Button from '@material-ui/core/Button'
import utilStyles from './styles/utils.module.scss'

export default function PageLinks () {
  return (
    <section className={cx(utilStyles.justifyCenter, 'my-5')}>
      <Button variant="outlined">
        <Link href="transactions">
          <a>Transactions</a>
        </Link>
      </Button>

      <Button variant="outlined">
        <Link href="transactions">
          <a>Movies</a>
        </Link>
      </Button>
    </section>
  )
}
