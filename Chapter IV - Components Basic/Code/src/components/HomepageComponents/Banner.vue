<template>
  <div id="greetings">
    <h1 id="green">{{ welcomemsg }}</h1>
  </div>
</template>

<script setup>
const props = defineProps(["welcomemsg"]);
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3rem;
}

#greetings {
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px black;
  color: rgb(92, 198, 142);
}
</style>
