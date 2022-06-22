import { ApolloClient, InMemoryCache } from "@apollo/client";

export const baseURL = "https://jkvback.herokuapp.com";

export const apoClient = new ApolloClient({
  uri: baseURL + "/graphql",
  cache: new InMemoryCache(),
});

export default apoClient;
