// 1. Define route components.
// These can be imported from other files
import Home from "@/views/Home.vue";
import Admin from "@/views/Admin.vue";
// import ProductDetails from "@/views/ProductDetails.vue";
// import Order from "@/views/Order.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  // { path: "/productdetails/:id", component: ProductDetails },
  // { path: "/order", component: Order },
];

export default routes;
