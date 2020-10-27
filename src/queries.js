import gql from 'graphql-tag';

export const GET_TRANSACTIONS = gql`
  {
    transactions {
      payee
      amount
      account {
          name
      }
    }
  }
`;