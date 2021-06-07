import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'components/Form';
import FormGroup from 'components/FormGroup';
import styles from './IncomeForm.module.scss';

function IncomeForm({ onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  function onFormSubmit({ name, amount }) {
    onSubmit({
      name,
      amount: parseFloat(amount),
    });

    // Reset form values
    reset();
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onFormSubmit)} className={utilStyles.form}>
        <FormControl className={utilStyles.formGroup}>
          <TextField
            label="Name"
            aria-label="income name"
            variant="outlined"
            name="name"
            inputRef={register}
            color="primary"
          />
        </FormControl>
        <FormControl className={utilStyles.formGroup}>
          <TextField
            label="Amount"
            aria-label="income amount"
            variant="outlined"
            type="number"
            name="amount"
            inputRef={register}
          />
        </FormControl>
        <FormControl className={utilStyles.formGroup}>
          <Button role="button" variant="outlined" type="submit"> Submit </Button>
        </FormControl>
      </form>
    </div>
  );
}

IncomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default IncomeForm;
