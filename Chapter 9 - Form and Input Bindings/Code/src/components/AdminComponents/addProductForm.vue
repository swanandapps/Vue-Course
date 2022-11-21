<template>
  <div style="margin: 5%">
    <input v-model="form.name" type="text" placeholder="name" />

    <input v-model="form.contact" type="number" placeholder="contact" />
  </div>

  <div id="output">
    {{ form.name }}
    {{ form.contact }}
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// const name = ref("");
// const contact = ref(0);

const form = reactive({
  name: "",
  contact: 0,
});
</script>

<style scoped></style>
