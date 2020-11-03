import React from 'react';
import { Query } from 'react-apollo';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

// import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';
import { FETCH_TRANSACTIONS } from '../actions';
import { GET_TRANSACTIONS } from '../queries';

// Redux Connected Component

const TransactionsList = () => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant="h2">Transactions</Typography>
      <Query query={GET_TRANSACTIONS}>
        {({ data: { transactions }, loading }) => {
          if (loading || !transactions) {
            return <div>Loading ...</div>;
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

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: () => dispatch(FETCH_TRANSACTIONS),
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
