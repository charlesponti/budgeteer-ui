import useSWR from 'swr'
import request from 'graphql-request'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

import List from '../../components/List'

export default function Accounts () {
  const { data, error } = useSWR(
    `
      query {
        getAccounts {
          _id
          name
        }
      }
    `
    , (query) => request(process.env.NEXT_PUBLIC_SERVER_URL, query))

  if (error) return <h5>Error!</h5>
  if (!data) return null

  return (
    <Layout>
      <Head>
        <title>Accounts</title>
      </Head>

      <section className="my-8">
        <List>
          {data.getAccounts.map(({ _id, name }) => (
            <li key={_id}>
              <Link href={`posts/${_id}`}>
                <a>
                  <h2 className="text-xl">
                    {name}
                  </h2>
                </a>
              </Link>
            </li>
          ))}
        </List>
      </section>
    </Layout>
  )
}
