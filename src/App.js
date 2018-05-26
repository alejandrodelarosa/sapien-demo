import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import config from './config';
import Routing from './Routing';
import './app.css';

const client = new ApolloClient({ uri: config.graphqlURL });

export default () => (
  <ApolloProvider client={client}>
    <Routing />
  </ApolloProvider>
)
