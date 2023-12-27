<script setup>
import UpdateCraftForm from './UpdateCraftForm.vue';
import { gql } from '@apollo/client/core';
import { computed, ref } from 'vue';
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

const route = useRoute();
const { result } = useQuery(craftQuery, { id: route.params.id });
const craft = computed(() => result.value?.Craft);
const showModal = ref(false);
</script>

<template>
  <h2>{{craft.name}} made by {{ craft.brand}}</h2>
  <p>This craft is {{ craft.age }} months old and costs {{
  Number(craft.price).toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }) }}</p>
  <button @click="showModal = !showModal">
    Update
  </button>
  <div v-if="showModal && craft" class="modal">
    <div class="modalInner">
      <UpdateCraftForm :craft="craft" @close="showModal = !showModal" />
    </div>
  </div>
</template>

<style scoped>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 400px;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: white;
    box-shadow: 0 0 40px 8px rgba(0, 0, 0, 0.4);
  }
  .modalInner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    padding: 1rem;
    overflow: auto;
  }
</style>
