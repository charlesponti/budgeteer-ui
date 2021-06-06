import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

import styles from './ExpenseForm.module.scss'
import utilStyles from '../../styles/utils.module.scss'

function ExpenseForm ({ onSubmit }: { onSubmit: Function }) {
  const { register, handleSubmit, reset } = useForm()

  function onFormSubmit (record: any) {
    onSubmit({
      name: record.name,
      amount: parseFloat(record.amount)
    })
    reset()
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onFormSubmit)} className={utilStyles.form}>
        <FormControl className={utilStyles.formGroup}>
          <TextField
            label="Name"
            aria-label="expense name"
            variant="outlined"
            name="name"
            inputRef={register}
            color="primary"
          />
        </FormControl>
        <FormControl className={utilStyles.formGroup}>
          <TextField
            label="Amount"
            aria-label="expense amount"
            variant="outlined"
            type="float"
            name="amount"
            inputRef={register}
          />
        </FormControl>
        <FormControl className={utilStyles.formGroup}>
          <Button role="button" variant="outlined" type="submit"> Submit </Button>
        </FormControl>
      </form>
    </div>
  )
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ExpenseForm
