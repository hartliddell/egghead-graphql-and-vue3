import { createApp, provide, h } from 'vue'
import './style.css'
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable';
import router from './router'

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql'
});

const cache = new InMemoryCache();

const defaultClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render: () => h(App)
})
  .use(router)
  .mount('#app');
