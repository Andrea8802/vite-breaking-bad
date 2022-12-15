<script>
import Card from './Card.vue'
import { store } from '../store.js'

export default {
    name: "CardList",
    components: {
        Card
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="list">
        <Card v-for="(character, index) in store.characterList" :infoCard="character" :key="index" />
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

.list {
    @include d-flex (evenly, center);
    flex-wrap: wrap;
    row-gap: 50px;
}
</style>