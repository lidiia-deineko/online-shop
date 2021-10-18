<template>
    <div>
        <div class="itemBook">
            <p>
                <img :src='book.volumeInfo.imageLinks.smallThumbnail' alt="Картинка">
            </p>
            <p><strong>Название книги: </strong>{{book.volumeInfo.title}}</p>
            <p><strong>Автор: </strong> {{book.volumeInfo.authors.join(', ')}}</p>
            <p><strong>Год выпуска: </strong> {{formatDate(book.volumeInfo.publishedDate)}}</p>
            <p><strong>Цена: </strong> {{checkPrice(book)}} <span>грн.</span></p>


            <button class="itemBook-btn" @click="showPopUp">Заказать</button>
        </div>
        <PopUp class="popUp"
               v-show="isShowPopUp"
               :book="book"
        />
    </div>
</template>

<script>
    import PopUp from "@/components/PopUp";
    import moment from 'moment'

    export default {
        name: "ItemBook",
        components: {PopUp},
        props: ['book'],
        data(){
            return{
                isShowPopUp: false,
            }
        },
        methods:{
            showPopUp(){
                this.isShowPopUp = true
            },
            formatDate(value){
                if (value) {
                    return moment(String(value)).format('DD.MM.YYYY')
                }
            },

            checkPrice(value){
                if (Object.prototype.hasOwnProperty.call(value,"saleInfo") &&
                    Object.prototype.hasOwnProperty.call(value.saleInfo,"listPrice") &&
                    Object.prototype.hasOwnProperty.call(value.saleInfo.listPrice, "amount"))
                {
                    return value.saleInfo.listPrice.amount;
                }
                else return 0;
            }
        }
    }
</script>

<style lang="scss">
    .itemBook{
        width: 200px;
        min-height: 500px;
        border: 1px solid darkslategray;
        margin: 10px;
        text-align: center;
        position: relative;
    }

    .itemBook-btn{
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }

    .popUp{
        width: 800px;
        min-height: 400px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 15px;
        box-shadow: 0 0 25px rgba(0,0,0,0.75);
        z-index: 2;
    }
</style>