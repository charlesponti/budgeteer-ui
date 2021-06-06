import gql from 'graphql-tag';

export const GET_TRANSACTIONS = gql`
  {
    getTransactions {
        _id
        payee
        amount
        account {
            name
        }
    }
  }
`;

export const GET_ACCOUNTS = gql`
    {
        accounts {
            id
            name
        }
    }
`;
