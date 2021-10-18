<template>
    <div class="popUp">
        <div class="closePopUp" @click="closePopUp">&#10006;</div>
        <p>
            <img :src='book.volumeInfo.imageLinks.smallThumbnail' alt="Картинка">
        </p>
        <p class="desc"><strong>Описание: </strong>{{book.volumeInfo.description}}</p>
        <form>
            <h4>Оформить заказ</h4>
            <div class="formItem">
                <label class="nameField">Имя: </label>
                <input class="inputValue" type="name" v-model="inputName" @keyup="activeBtn">
                <p class="checkValid" v-show="showNameError">Поле должно содержать минимум 2 символа</p>

            </div>
            <div class="formItem">
                <label class="nameField">Email: </label>
                <input class="inputValue" type="text" v-model="inputEmail" @keyup="activeBtn">
                <p class="checkValid" v-show="showEmailError">Поле должно соответствовать формату email</p>
            </div>
            <div class="formItem">
                <label class="nameField">Телефон: </label>
                <input class="inputValue" type="text" v-model="inputPhone" @keyup="activeBtn">
                <p class="checkValid" v-show="showPhoneError">Поле должно соответствовать формату телефонов</p>
            </div>
            <button :disabled="isBtnActive" @click="addToCart">Отправить</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "PopUp",
        props: ['book'],
        data(){
            return{
                isBtnActive: true,
                inputName: '',
                inputEmail: '',
                inputPhone: '',
                showNameError: false,
                showEmailError: false,
                showPhoneError: false
            }
        },
        methods:{
            closePopUp(){
                this.$parent.isShowPopUp = false
            },
            activeBtn(){
                if(this.inputName.length !==0  && this.inputEmail.length !==0 && this.inputPhone.length !==0){
                    this.isBtnActive = false
                }
            },
            validEmail() {
                let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return reg.test(this.inputEmail);
            },
            validPhone() {
                let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
                return reg.test(this.inputPhone);
            },
            addToCart(e){

                if (this.inputName.length<2) {
                    this.showNameError = true
                }if (this.inputName.length>=2) {
                    this.showNameError = false
                }if (!this.validEmail()) {
                    this.showEmailError = true
                }if (this.validEmail()) {
                    this.showEmailError = false
                }if (!this.validPhone()) {
                    this.showPhoneError = true
                }if (this.validPhone()) {
                    this.showPhoneError = false
                }if (this.inputName.length>=2 &&
                    this.validEmail() &&
                    this.validPhone())
                {
                    this.closePopUp()
                    this.inputName = ''
                    this.inputEmail = ''
                    this.inputPhone = ''
                    this.$store.commit('addToCart', {book: this.book})
                }
                e.preventDefault()
            }
        }
    }
</script>

<style lang="scss">
    .popUp{
        background-color: antiquewhite;
    }

    .closePopUp{
        cursor: pointer;
        position: fixed;
        right: 15px;
        top: 15px;
    }

    .nameField::before{
        content: "*";
        position: absolute;
        left: 5px;
    }

    .checkValid{
        color: red;
        font-size: 12px;
    }

    .formItem{
        padding-bottom: 10px;
    }

    .desc{
        font-size: 12px;
    }
</style>