<template>
  <!-- <div id="sort">
    Weird: If event handler is added above the v-model, you will get old v model value not the latest one
    this happens in quasar.
    there is no other relevant event handler in quasar
    

    <q-select
      v-model="sortoption"
      :options="options"
      label="Sort By"
      @update:model-value="sortProducts"
    />
  </div> -->
  <div id="products">
    <div
      @click="showProduct(item.id)"
      v-for="item in products"
      :key="item"
      id="individual_product"
    >
      <img :src="item.imageUrl" alt="" />

      <p>{{ item.title }}</p>

      <p>{{ item.price }} Rs</p>
    </div>
  </div>
</template>

<script setup>
// HMR is not workimng in this specific file.
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/firebase.js";
import { collection, getDocs } from "firebase/firestore";

const router = useRouter();

const products = ref([]);

const showProduct = (id) => {
  router.push(`/productdetails/${id}`);
};

const getProductsData = async () => {
  const querySnapshot = await getDocs(collection(db, "vuestore101"));
  querySnapshot.forEach((doc) => {
    let product = doc.data();
    product.id = doc.id;
    products.value.push(product);
  });
};

onMounted(async () => {
  await getProductsData();
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
