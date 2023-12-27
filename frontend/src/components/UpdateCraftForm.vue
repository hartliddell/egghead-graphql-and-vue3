<script setup>
import { reactive } from 'vue';
const props = defineProps({
  craft: Object
});

const emit = defineEmits(['close']);
const updateFields = reactive({ ...props.craft })
</script>

<template>
  <form class="formFields">
    <label for="craftName">Name of craft:
      <input id="craftName" v-model="updateFields.name" />
    </label>
    <label for="craftType">Type of craft:
      <input id="craftType" v-model="updateFields.type" />
    </label>
    <label for="craftBrand">Brand of craft:
      <input id="craftBrand" v-model="updateFields.brand" />
    </label>
    <label for="craftAge">Age of craft:
      <input id="craftAge" v-model="updateFields.age" />
    </label>
    <label for="craftPrice">Price of craft:
      <input id="craftPrice" v-model="updateFields.price" />
    </label>
  </form>
  <button @click="emit('close')">Cancel</button>
  <button>Update</button>
</template>

<style scoped>
label {
  width: 100%;
  display: grid;
  grid-template-columns: 8rem 1fr;
  margin-bottom: 0.5rem;
}
</style>
