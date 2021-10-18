<template>
  <div id="app">
    <div class="nav">
      <Form />
      <router-link to="/cart" class="cart-position">
        <div>
          <a href="#">
            <img alt="Vue logo" src="./assets/cart.png" class="cartImg"/>
          </a>
        </div>
      </router-link>
      <StatusCart />
    </div>
    <router-view></router-view>
    <Catalog />
    <OrderPopUp />

  </div>
</template>

<script>

import Form from "@/components/Form";
import Catalog from "@/components/Catalog";
import StatusCart from "@/components/StatusCart";
import OrderPopUp from "@/components/OrderPopUp";

export default {
  name: "App",
  components: {
    OrderPopUp,
    StatusCart,
    Form,
    Catalog
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
  .nav{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cartImg{
    width: 30px;
    height: 30px;
    padding: 0 15px;
  }

</style>
