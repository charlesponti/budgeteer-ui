import React from 'react';
import { Query } from 'react-apollo';
import { GET_TRANSACTIONS } from './queries';
import './App.css';

// Apollo "Connected" Component

const App = () => (
  <Query query={GET_TRANSACTIONS}>
    {({ data: { transactions }, loading }) => {
      if (loading || !transactions) {
        return <div>Loading ...</div>;
      }

      return (
        transactions.map((transaction) => (
          <div key={transaction.id}>
            <div>{transaction.payee}</div>
            <div>{transaction.amount}</div>
          </div>
        ))
      );
    }}
  </Query>
);

export default App;
