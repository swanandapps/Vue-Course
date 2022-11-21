import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  // In Setup Stores:

  // ref()s become state properties
  // computed()s become getters
  // function()s become actions

  const cart = ref([]);
  const cartCount = computed(() => cart.value.length);
  const cartTotal = computed(() =>
    cart.value.reduce((total, current) => {
      return Number(total) + Number(current.price) * current.quantity;
    }, 0)
  );

  const addtoCart = (product) => {
    cart.value.push(product);
  };

  const removefromCart = (id) => {
    cart.value = cart.value.filter((el) => {
      return el.id !== id;
    });
  };
  return { cart, cartCount, addtoCart, cartTotal, removefromCart };
});
