<template>
    <div class="cartPage">
        <h1>Cart</h1>
        <div class="closePopUp" @click="closePopUp">&#10006;</div>
        <div class="cartItem" v-for="item in cart" :key="item.id" >
            <p class="cartItemElem">
                <img :src='item.book.volumeInfo.imageLinks.smallThumbnail' alt="Картинка">
            </p>
            <p class="cartItemElem">{{item.book.volumeInfo.description}}</p>
            <p class="cartItemElem">{{item.quantity}}</p>
            <p class="cartItemElem">{{item.totalPrice}}</p>

        </div>
        <hr>
        <div class="cartFooter">
            <p><strong>Итоговая сумма: </strong>{{$store.getters.totalPrice}}</p>
            <button @click="makeOrder">Заказать</button>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Cart",
        methods:{
            closePopUp(){
                this.$router.push('/')
            },
            makeOrder(){
                this.closePopUp()
                this.$store.state.isShowOrderPopUp = true
                    setTimeout((() => {
                    this.$store.state.isShowOrderPopUp = false
                        this.$store.state.cart = []
                }), 15000)
            }
        },
        computed:{
            cart(){
                return this.$store.state.cart
            }
        }
    }
</script>

<style lang="scss">
 .cartPage{
     width: 800px;
     height: 800px;
     position: fixed;
     background-color: white;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: #fff;
     padding: 15px;
     box-shadow: 0 0 25px rgba(0,0,0,0.75);
     overflow-y:scroll;
     z-index: 5;
 }

    .cartItem{
        display: flex;
        justify-content: space-between;
    }

    .cartItemElem{
        padding: 0 15px;
    }

    .cartFooter{
        text-align: right;
    }
</style>