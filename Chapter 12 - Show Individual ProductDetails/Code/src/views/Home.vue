<template>
  <div>
    <NavbarComponent />
    <BannerComponent welcomemsg="Welcome to Vue Js Shop" />
    <ProductsComponent />
  </div>
</template>

<script setup>
import NavbarComponent from "@/components/HomepageComponents/Navbar.vue";
import BannerComponent from "@/components/HomepageComponents/Banner.vue";
import ProductsComponent from "@/components/HomepageComponents/Products.vue";
</script>

<style scoped></style>
