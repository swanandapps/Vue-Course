<template>
  <div id="products">
    <div v-for="item in Products" :key="item" id="individual_product">
      <!--data binding-->
      <img :src="item.imageUrl" alt="" />

      <p>{{ item.title }}</p>

      <p>{{ item.price }} Rs</p>
    </div>
  </div>
</template>

<script setup>
import data from "../../../data/products.json";

const Products = data;
</script>

<style scoped>
#sort {
  padding-top: 3%;
  width: 15%;
}
#products {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  grid-gap: 3%;
  margin-top: 3%;
}

#products img {
  width: 100%;
}

#individual_product * {
  margin-top: 2%;
}
</style>
