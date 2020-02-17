import { NgModule } from '@angular/core';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split, ApolloLink } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { OperationDefinitionNode } from 'graphql';
import { onError } from 'apollo-link-error';

@NgModule({
  exports: [ApolloModule, HttpLinkModule]
})
export class GraphQLModule {

  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    // Create an http link:
    const http = httpLink.create({
      uri: 'https://demo.astrograph.io/graphql'
    });

    // Create a WebSocket link:
    const ws = new WebSocketLink({
      uri: `wss://demo.astrograph.io/graphql`,
      options: {
        reconnect: true
      }
    });

    // we split the link based on the type of query
    const splitLink = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      ws,
      http,
    );

    // the demo service we're using emits random errors, for the moment we'll just ignore them
    const errLink = onError(({ graphQLErrors, networkError, response }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
    
      if (networkError) console.log(`[Network error]: ${networkError}`);

      response.errors = null;
    });

    const link = ApolloLink.from([
      errLink,
      splitLink
    ]);

    apollo.create({
      link,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'none'
        }
      }
    });
  }
}
