import React, { useState } from 'react'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { List, ListItem, ListItemText } from '@material-ui/core'

import styles from './Expenses.module.scss'
import Layout from '../../components/layout'
import ExpenseForm from '../../components/ExpenseForm'

function Expenses () {
  const [expenses, setExpenses] = useState([
    { name: 'Housing', amount: 3886.00 }
  ])

  async function onSubmit (expense) {
    return setExpenses([...expenses, expense])
  }

  return <>
    <Head>
      <title>Expenses</title>
    </Head>
    <Layout>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12}>
          <Typography variant="h3" className={styles.title}>Expenses</Typography>
        </Grid>
        <Grid item xs={8}>
          <ExpenseForm onSubmit={onSubmit}/>
        </Grid>
        <Grid item xs={8}>
          <List dense={true}>
            {expenses.map(({ name, amount }) => (
              <ListItem key={name} label={name}>
                <ListItemText
                  primary={name}
                  primaryTypographyProps={{
                    style: {
                      fontSize: '1.5rem'
                    }
                  }}
                  secondary={new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(amount)}
                  secondaryTypographyProps={{
                    style: {
                      color: 'red'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Expenses
