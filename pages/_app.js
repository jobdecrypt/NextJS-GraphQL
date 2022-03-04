import "../styles/globals.css";
/* Apollo-Client Part Start */
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

/* Apollo-Client Part End */

function MyApp({ Component, pageProps }) {
  // We added ApolloProvider as we make a Const Variable above
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
