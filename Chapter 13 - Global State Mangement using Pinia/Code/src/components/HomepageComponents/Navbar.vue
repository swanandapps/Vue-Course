<template>
  <div id="navbar">
    <div id="lhs">
      <router-link to="/">
        <div>Home</div>
      </router-link>
    </div>

    <div id="rhs">
      <div>Account</div>
      <div id="cart">
        <q-icon @click="dialog = !dialog" name="shopping_cart" />
        <div id="cart_count">{{ cartStore.cartCount }}</div>

        <cartpopup :dialogVisibility="dialog" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "../../store.js";
// import cartpopup from "../Cart/cartpopup.vue";

const cartStore = useCartStore();
const dialog = ref(false);

onMounted(() => {
  console.log("cartStore:", cartStore);
});
</script>

<style scoped>
a {
  text-decoration: none;
}

#navbar {
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 130%;
  border-bottom: solid 1px black;
}
#lhs {
  display: flex;
  flex: 3;
  align-items: center;
}
#rhs {
  display: flex;
  flex: 3;
  gap: 10%;
  align-items: center;
  justify-content: flex-end;
}

#cart {
  display: flex;
  align-items: center;
}
#cart_count {
  padding-bottom: 12px;
}
#cart-dialog {
  border: solid black 1px;
}
</style>
