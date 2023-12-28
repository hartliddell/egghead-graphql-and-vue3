<script setup>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { gql } from '@apollo/client/core';
import Craft from './CraftListItem.vue'

const craftsQuery = gql`
  query ($offset: Int) {
    Crafts (offset: $offset) {
      edges {
        name
        id,
        type,
        price,
        age,
        owner {
          id,
          firstName,
          lastName,
        }
      }
    }
  }
`;

const { result, fetchMore } = useQuery(craftsQuery, () => ({ offset: 0 }));
const data = computed(() => result.value?.Crafts.edges ?? []);

const loadMore = () => {
  fetchMore({
    variables: {
      offset: data.value.length
    },
    updateQuery: (prev, { fetchMoreResult: next }) => {
      console.log('prev', prev);
      if (!next) return prev;
      const foo = {
        Crafts: {
          __typename: "CraftsResult",
          edges: [
            ...prev.Crafts.edges,
            ...next.Crafts.edges
          ]
        }
      };

      console.log('...', foo);
      return foo;
    }
  });
};

</script>

<template>
  <div>
    <h2>Current Crafts</h2>
    <ul>
      <Craft v-for="craft in data" :key="craft.id" :craft="craft" />
    </ul>
    <button @click="loadMore()">Load more</button>
  </div>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
  padding: 0;
}

li {
  list-style: none;
}

</style>
