import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import store from '../../store';
import Transactions from '../Transactions';

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(() => ({
    isLoading: false,
    isAuthenticated: true,
    getAccessTokenSilently: jest.fn(() => Promise.resolve('access-token')),
  })),
  withAuthenticationRequired: jest.fn(),
}));

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

describe('<Transactions/>', () => {
  it('renders', () => {
    render(
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <Transactions />
        </ReduxProvider>
      </ApolloProvider>,
    );
  });

  xit('makes a call to the API when the button is clicked', async () => {
    fetch.mockResponseOnce(JSON.stringify({ msg: 'This is the API result' }));

    render(<Transactions />);
    fireEvent.click(screen.getByText('Ping API'));

    await waitFor(() => screen.getByTestId('api-result'));

    expect(
      await screen.findByText(/This is the API result/),
    ).toBeInTheDocument();
  });
});
