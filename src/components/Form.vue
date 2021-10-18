<template>
    <div>
        <input type="text" v-model="$store.state.searchParam"  @keyup.enter="addBooks">
        <button @click="addBooks">Отправить</button>
    </div>

</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Form",
        methods:{
            ...mapActions(['addBooks']),
        },
    }
</script>

<style lang="scss">

</style>