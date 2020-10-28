import { Mutation } from 'react-apollo';
import React from 'react';
import { CREATE_TRANSACTION } from '../mutations';

const TransactionForm = ({ id }) => {
  const person = '1';
  const account = '1';

  return (
    <Mutation mutation={CREATE_TRANSACTION} variables={{ person, account }}>
      {(createTransaction) => (
        <button type="button" onClick={createTransaction}>
          Create Transaction
        </button>
      )}
    </Mutation>
  );
};

export default TransactionForm;
