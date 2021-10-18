<template>
    <div class="catalogPage">
        <ItemBook v-for="book in $store.state.books"
        :book="book" :key="book.id"
        />
    </div>
</template>

<script>
    import ItemBook from "@/components/ItemBook";
    export default {
        name: "Catalog",
        components: {ItemBook},

    }
</script>

<style lang="scss">
    .catalogPage{
        display: flex;
        flex-wrap: wrap;
    }
</style>