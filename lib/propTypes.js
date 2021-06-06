import PropTypes from 'prop-types'

export const transaction = PropTypes.shape({
  _id: PropTypes.string,
  payee: PropTypes.string,
  amount: PropTypes.number
})
