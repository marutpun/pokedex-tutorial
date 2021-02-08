import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import PokemonsContainer from './containers/PokemonsContainer';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonsContainer />
    </ApolloProvider>
  );
}

export default App;
