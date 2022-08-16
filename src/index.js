import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: process.env.REACT_APP_ENDPOINT,
  headers: {
    "Authorization": process.env.REACT_APP_TOKEN
  }, 
  cache: new InMemoryCache()
})

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
