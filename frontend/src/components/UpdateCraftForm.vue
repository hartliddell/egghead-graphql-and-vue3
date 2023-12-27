<script setup>
defineProps({
  craft: Object
});

const emit = defineEmits(['close']);
</script>

<template>
  <button @click="emit('close')">Cancel</button>
  <button>Update</button>
  <br />
  <div>{{ JSON.stringify(craft) }}</div>
</template>

<style scoped>
</style>
