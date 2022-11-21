<template>
  <div id="cart">
    <q-dialog
      :seamless="true"
      full-height
      id="cart_dialog"
      :modelValue="dialogVisibility"
      position="right"
    >
      <q-card id="cart_card">
        <q-card-section>
          <div>
            <h4>Recently Added Items</h4>
          </div>

          <q-space />

          <div id="cart_wrapper">
            <div
              id="cart_product"
              v-for="product in cartStore.cart"
              :key="product"
            >
              <div id="lhs">
                <img :src="product.imageUrl" alt="" />
              </div>
              <div id="rhs">
                <p>{{ product.title }}</p>
                <p>{{ product.price }}</p>
                <p>Qty: {{ product.quantity }}</p>

                <q-icon @click="removefromCart(product.id)" name="delete" />
              </div>
            </div>
          </div>

          <div id="cart_total">
            <p>Cart Total : {{ cartStore.cartTotal }}</p>
          </div>

          <div id="place_order">
            <router-link to="/order">
              <q-btn color="secondary" label="Proceed"
            /></router-link>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "@/store.js";
import Showproductdetails from "../ProductDetailsComponents/showproductdetails.vue";

const cartStore = useCartStore();
const dialog = ref(false);
const show = ref(true);
// const cartTotal = ref(0);
const props = defineProps(["dialogVisibility"]);

const removefromCart = (id) => {
  cartStore.removefromCart(id);
  console.log(cartStore.cart.value);
};
</script>

<style scoped>
#place_order {
  margin-top: 5%;
}
#cart_total p {
  margin-top: 4%;
  font-size: 130%;
}
#cart_product div {
  border: solid 0.1px black;
}
#cart_product {
  display: flex;
}

#lhs {
  display: flex;
  flex: 4;
  justify-content: center;
}
#lhs img {
  width: 90%;
  padding: 5%;
}
#rhs {
  display: flex;
  flex: 6;
  flex-direction: column;
  padding: 3%;
  font-size: 110%;
}
#cart_card {
  margin-top: 10%;
  border: solid 1px black;
  width: 400px;
  height: 600px;
  border: none;
}

#cart-dialog {
  border: solid black 1px;
}
</style>
