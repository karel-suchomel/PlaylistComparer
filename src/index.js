import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.css';
import App from './components/App';

const cache = new InMemoryCache();
const link = new HttpLink({
   uri: 'https://localhost:44329/graphql/'
});

const client = new ApolloClient({
   cache,
   link
});

ReactDOM.render(
   <ApolloProvider client={client}>
      <App />
   </ApolloProvider>,
   document.getElementById('root')
);
