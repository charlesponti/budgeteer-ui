/**
 * Redux store
 */
import { createStore } from 'redux';

const initialState = {
  isLoading: false,
  selectedRepositoryIds: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS': {
      return { ...state, isLoading: true };
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
