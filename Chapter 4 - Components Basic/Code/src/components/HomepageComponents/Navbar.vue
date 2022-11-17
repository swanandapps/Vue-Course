<template>
  <div>
    <div id="navbar">
      <div id="lhs">
        <div>Home</div>
      </div>

      <div id="rhs">
        <div>Account</div>
        <div id="cart">
          <div id="cart_count">1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["msg"]);
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
