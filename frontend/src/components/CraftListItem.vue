<script setup lang="ts">
defineProps({
  craft: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li :class="craft.owner ? 'owned' : 'forSale'">
    <router-link :to="`/crafts/${craft.id}`">
      {{ craft.name }}
      <span v-if="craft.owner">
        is owned by {{ craft.owner.firstName }} {{ craft.owner.lastName }}
      </span>
      <span v-else>
        is available to buy and costs
        {{
          Number(craft.price).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })
        }}
      </span>
    </router-link>
  </li>
</template>

<style scoped>
.owned {
  background-color: rgba(20, 20, 20, 0.3);
}
.forSale {
  font-weight: 800;
  a {
    font-weight: inherit;
  }
}

li {
  border: solid 1px black;
  border-radius: 4px;
  padding: 8px;
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
