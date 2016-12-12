import Vue from 'vue';
import App from './App.vue';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__',
  }),
  dataIdFromObject: r => r.id,
});

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient,
});

// Start the app
new Vue({
  el: '#app',
  render: h => h(App)
});
