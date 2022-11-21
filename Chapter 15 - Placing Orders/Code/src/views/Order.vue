<template>
  <Navbar />

  <div id="container">
    <h3>Fill in Address:</h3>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="form.name"
        label="Your name "
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your Contact Number"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val.length === 10) || 'Please type valid number',
        ]"
      />

      <q-input
        filled
        type="text"
        v-model="form.address"
        label="Your Address"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val.length > 10) || 'Please type proper address',
        ]"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import Navbar from "@/components/HomepageComponents/Navbar.vue";

import { useCartStore } from "@/store";
import { ref, reactive } from "vue";
import { db, collection, addDoc } from "@/firebase";
import { async } from "@firebase/util";

const cartStore = useCartStore();
console.log("cartStore:", cartStore);

const form = reactive({
  name: "",
  contact: "",
  address: "",
  order: cartStore.cart,
  total: cartStore.cartTotal,
});

const onSubmit = async () => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "orders"), form);
  console.log("Document written with ID: ", docRef.id);
};
</script>

<style scoped>
#container {
  padding: 5%;

  width: 50%;
}
</style>
