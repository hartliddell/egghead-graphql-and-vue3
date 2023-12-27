<script setup>
import { gql } from '@apollo/client/core';
import { ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';

const craftQuery = gql`
  query ($id: ID) {
    Craft(id: $id) {
      name
      type,
      brand,
      price,
      age,
      owner {
        id,
        firstName,
        lastName,
      }
    }
  }
`;

</script>

<template>
Hello world
</template>

<style scoped>
</style>
