<script setup>
defineProps({
  craft: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li :class="craft.owner ? 'owned' : 'for-sale'">
    <p>
      {{ craft.name }}
      <span v-if="craft.owner">
        is owned by {{ craft.owner.firstName }} {{ craft.owner.lastName }}
      </span>
      <span v-else>
        is available to buy and costs {{
          Number(craft.price)
            .toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })
        }}
      </span>
    </p>
  </li>
</template>

<style scoped>
  .owned {
    background-color: rgba(20, 20, 20, 0.3);
  }
  .for-sale {
    font-weight: 800;
  }

  li {
    border: solid 1px black;
    border-radius: 4px;
    padding: 8px;
  }

</style>
