import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { GET_TRANSACTIONS } from '../services/graphql/queries';

const FeedbackBlock = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 10px;
  border: 1px solid grey;
  padding: 16px;
  font-size: 1.3rem;
  font-weight: 500;
`;

const Header = styled(Typography).attrs({ variant: 'h2' })`
  margin-bottom: 16px
`;

const TransactionsList = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header>Transactions</Header>
      <Query query={GET_TRANSACTIONS}>
        {({ data: { getTransactions: transactions }, loading }) => {
          if (loading || !transactions) {
            return <div>Loading ...</div>;
          }

          if (transactions.length === 0) {
            return (
              <FeedbackBlock>
                No transactions
              </FeedbackBlock>
            );
          }

          return (
            transactions.map(({ id, payee, amount }) => (
              <Card key={id}>
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      {payee}
                    </Grid>
                    <Grid item xs={6}>
                      {amount}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))
          );
        }}
      </Query>
    </Grid>
  </Grid>
);

export default TransactionsList;
