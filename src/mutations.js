import gql from 'graphql-tag';

export const CREATE_TRANSACTION = gql`
    {
        createTransaction(payee: $payee, amount: $amount, account: $account, person: $person) {
            id
        }
    }
`;

export const CREATE_ACCOUNT = gql`
    {
        createAccount(name: $name, person: $person) {
            id
        }
    }
`;
