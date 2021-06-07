import PropTypes from 'prop-types';

const transactionPropType = PropTypes.shape({
  _id: PropTypes.string,
  payee: PropTypes.string,
  amount: PropTypes.number,
});

export default {
  transactionPropType,
};
