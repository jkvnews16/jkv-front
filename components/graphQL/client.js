import { ApolloClient, InMemoryCache } from "@apollo/client";

export const baseURL = "http://192.46.209.142:1337";

export const apoClient = new ApolloClient({
  uri: baseURL + "/graphql",
  cache: new InMemoryCache(),
});

export default apoClient;
