/**
 * Redux store
 */
import { createStore } from 'redux';

const initialState = {
  selectedRepositoryIds: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS': {
      return { ...state, loading: true };
    }
    case 'FETCH_TRANSACTIONS_SUCCESS': {
      return { ...state, transactions: action.payload };
    }
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
