<script setup lang="ts">
import { reactive } from "vue";
import { gql } from "@apollo/client/core";
import { useMutation } from "@vue/apollo-composable";
const props = defineProps({
  craft: Object,
});

const emit = defineEmits(["close", "updated"]);
const updateFields = reactive({ ...props.craft });
const updateMutation = gql`
  mutation (
    $name: String
    $type: String
    $brand: String
    $price: String
    $age: Int
    $id: ID!
  ) {
    updateCraft(
      name: $name
      brand: $brand
      price: $price
      age: $age
      id: $id
      type: $type
    ) {
      id
    }
  }
`;

const { mutate: updateCraft } = useMutation(updateMutation, () => ({
  variables: {
    name: updateFields.name,
    type: updateFields.type,
    brand: updateFields.brand,
    price: updateFields.price,
    age: Number(updateFields.age),
    id: updateFields.id,
  },
}));

const handleSubmit = async () => {
  await updateCraft();
  emit("updated");
};
</script>

<template>
  <form class="formFields" @submit.prevent>
    <label for="craftName"
      >Name of craft:
      <input id="craftName" v-model="updateFields.name" />
    </label>
    <label for="craftType"
      >Type of craft:
      <input id="craftType" v-model="updateFields.type" />
    </label>
    <label for="craftBrand"
      >Brand of craft:
      <input id="craftBrand" v-model="updateFields.brand" />
    </label>
    <label for="craftAge"
      >Age of craft:
      <input id="craftAge" v-model="updateFields.age" />
    </label>
    <label for="craftPrice"
      >Price of craft:
      <input id="craftPrice" v-model="updateFields.price" />
    </label>
  </form>
  <button @click="emit('close')">Cancel</button>
  <button @click="handleSubmit()">Update</button>
</template>

<style scoped>
label {
  width: 100%;
  display: grid;
  grid-template-columns: 8rem 1fr;
  margin-bottom: 0.5rem;
}
</style>
