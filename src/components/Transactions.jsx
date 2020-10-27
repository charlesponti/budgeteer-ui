import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

// import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';

import { GET_TRANSACTIONS } from '../queries';

// Redux Connected Component

const TransactionsList = ({ transactions }) => (
  <Grid container>
    <Grid item>
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
                  <p>{payee}</p>
                  <p>{amount}</p>
                </CardContent>
              </Card>
            ))
          );
        }}
      </Query>
    </Grid>
  </Grid>
);

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      payee: PropTypes.string,
      amount: PropTypes.number,
    }).isRequired,
  ),
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps)(TransactionsList);

// Redux Connected Component

// const Select = ({ isSelected, toggleSelectRepository }) => (
//   <button type="button" onClick={toggleSelectRepository}>
//     {isSelected ? 'Unselect' : 'Select'}
//   </button>
// );

// const mapDispatchToProps = (dispatch, { id, isSelected }) => ({
//   toggleSelectRepository: () => dispatch({
//     type: 'TOGGLE_SELECT_REPOSITORY',
//     id,
//     isSelected,
//   }),
// });

// const SelectContainer = connect(null, mapDispatchToProps)(Select);

// // Apollo "Connected" Component

// const Star = ({ id }) => (
//   <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
//     {(starRepository) => (
//       <button type="button" onClick={starRepository}>
//         Star
//       </button>
//     )}
//   </Mutation>
// );
