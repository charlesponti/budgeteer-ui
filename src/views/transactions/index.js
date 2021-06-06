import useSWR from 'swr'
import { request } from 'graphql-request'
import Head from 'next/head'

import Layout from '../../components/layout'
import TransactionList from '../../components/transactions/TransactionList'

export default function Transactions () {
  const { data, error } = useSWR(
    `
      query {
        getTransactions {
          _id
          payee
          amount
          category {
            name
          }
          account {
            name
          }
        }
      }
    `
    , (query) => request(process.env.NEXT_PUBLIC_SERVER_URL, query))

  if (error) return <h5>Error!</h5>
  if (!data) return null

  return (
    <Layout>
      <Head>
        <title>Transactions</title>
      </Head>

      <h1 className="text-4xl">Transactions</h1>

      <div>
        {
          data.getTransactions.length
            ? <TransactionList transactions={data.getTransactions}/>
            : <h3>No Transactions</h3>
        }
      </div>
    </Layout>
  )
}
