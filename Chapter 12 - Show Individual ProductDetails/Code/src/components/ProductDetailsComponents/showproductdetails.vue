<template>
  <div id="container">
    <div id="lhs">
      <img :src="product.imageUrl" alt="" />
    </div>
    <div id="rhs">
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>

      <q-btn
        id="addtocart_btn"
        :disable="buttondisable"
        @click="addtoCart(product)"
        color="black"
        label="Add to Cart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { db } from "@/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const route = useRoute();
const product = ref({});

onMounted(async () => {
  const docRef = doc(db, "vuestore101", route.params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("docSnap:", docSnap);
    product.value = docSnap.data();
    product.value.id = docSnap.id;

    console.log("product:", product.value);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});
</script>

<style scoped>
#addtocart_btn {
  width: 20%;
  margin-top: 5%;
}

#quantity_section {
  display: flex;
  gap: 2%;
  height: 20px;
  font-size: 90%;
}
#container {
  display: flex;
  margin-top: 5%;
}

#lhs {
  display: flex;
  flex: 4;
  justify-content: center;
}
#lhs img {
  width: 90%;
}
#rhs {
  display: flex;
  flex: 6;
  flex-direction: column;
  width: 30%;
  padding: 3%;
  margin-left: 3%;
  font-size: 180%;
}
</style>
