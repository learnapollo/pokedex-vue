import Vue from 'vue';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/ciyg03eqf0akk0119c1ziwrfb'
  }),
  dataIdFromObject: r => r.id
});

Vue.use(VueApollo, {
  apolloClient
});

export default apolloClient;
