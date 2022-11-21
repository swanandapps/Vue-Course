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
import { onMounted } from "vue";
import { db, collection, getDocs } from "@/firebase.js";
import data from "@/data/products.json";

const Products = data;

const getProducts = async (db) => {
  const citiesCol = collection(db, "vuestore101");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log("cityList:", cityList);
};

onMounted(() => {
  getProducts(db);
});
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
