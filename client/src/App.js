import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import AllUserEvents from './pages/AllUserEvents/AllUserEvents';
import LoginForm from './components/LoginForm';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
          <Navbar />
          <Switch>
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/events" component={AllUserEvents} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
