import React from 'react';
import ReactDOM from 'react-dom';
//import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloClient, InMemoryCache} from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Router } from 'react-router-dom';
import './index.css';
import './assets/styles/global.css';
import App from './components/App';
import history from './history';

const client = new ApolloClient({
   uri: 'https://localhost:5001/graphql/',
   cache: new InMemoryCache(),
   credentials: 'include',
   defaultOptions: {
      query: {
         errorPolicy: 'all'
      },
      mutate: {
         errorPolicy: 'all'
      }
   }
});

ReactDOM.render(
   <ApolloProvider client={client}>
      <Router history={history}>
         <App />
      </Router>      
   </ApolloProvider>,
   document.getElementById('root')
);
