import gql from 'graphql-tag';

export const GET_TRANSACTIONS = gql`
  {
    transactions {
        id
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
