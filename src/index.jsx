import React from 'react';
import ReactDOM from 'react-dom';
//import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloClient, InMemoryCache} from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './assets/styles/global.css';
import App from './components/App';

const client = new ApolloClient({
   uri: 'https://localhost:44329/graphql/',
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
      <BrowserRouter>
         <App />
      </BrowserRouter>      
   </ApolloProvider>,
   document.getElementById('root')
);
