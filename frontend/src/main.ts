import "./style.css";
import router from "./router";
import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp, provide, h } from "vue";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
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
  render: () => h(App),
})
  .use(router)
  .mount("#app");
