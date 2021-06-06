import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import cx from 'classnames'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import { Typography } from '@material-ui/core'

const name = 'Hominem'
export const siteTitle = 'Hominem'

// Layout.propTypes = {
//   children: PropTypes.oneOf([
//     PropTypes.element,
//     PropTypes.arrayOf(PropTypes.element)
//   ]),
//   home: PropTypes.bool
// }

export default function Layout ({ children, home }) {
  return (
    <div className={cx(styles.container)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn about TheCharlesPonti"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.jpg"
          className={cx(styles.headerImage, utilStyles.borderCircle)}
          alt={name}
        />
        <Typography variant="h4" className={styles.headerText}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </Typography>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
