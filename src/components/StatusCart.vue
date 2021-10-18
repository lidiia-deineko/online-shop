<template>
    <div v-if="cart.length">
       Добавлено {{$store.state.cartCount}} товаров на сумму {{$store.getters.totalPrice}}
    </div>
</template>

<script>

    export default {
        name: "StatusCart",
        computed:{
            cart(){
                return this.$store.state.cart
            }
        }
    }
</script>


<style>

</style>