import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Transactions from './scenes/Transactions';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Home from './scenes/Home';
import Profile from './scenes/Profile';
import history from './services/utils/history';

// styles
import './App.css';

// fontawesome
import initFontAwesome from './services/utils/initFontAwesome';

initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return (
      <div>
        Oops...
        {' '}
        {error.message}
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
