import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './assets/styles/global.css';
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
      <BrowserRouter>
         <App />
      </BrowserRouter>      
   </ApolloProvider>,
   document.getElementById('root')
);
