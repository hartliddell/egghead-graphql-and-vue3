import './style.css'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp, provide, h } from 'vue'

createApp(App).mount('#app')
