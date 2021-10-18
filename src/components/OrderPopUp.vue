<template>
    <div class="orderPopUp" v-if="$store.state.cart.length" v-show="$store.state.isShowOrderPopUp">
        <p>Ваш заказ на сумму {{$store.getters.totalPrice}} успешно оформлен</p>
    </div>
</template>

<script>
    export default {
        name: "OrderPopUp"
    }
</script>

<style lang="scss">
    .orderPopUp{
        width: 600px;
        min-height: 50px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 15px;
        box-shadow: 0 0 25px rgba(0,0,0,0.75);
        z-index: 3;
        text-align: center;
    }
</style>