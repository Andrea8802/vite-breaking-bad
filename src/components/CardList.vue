<script>
import Card from './Card.vue'
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: "CardList",
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getAPI() {
            axios
                .get(store.apiURL)
                .then(res => {
                    store.characterList = res.data.results
                    store.infoAPI = res.data.info
                })
                .catch(err => {
                    console.log("Errore: ", err);
                })
        }

    },
    mounted() {
        this.getAPI();

    }
}
</script>

<template>
    <div class="list">
        <Card v-for="(character, index) in store.characterList" :infoCard="character" :key="index" />
    </div>
</template>

<style lang="scss" scoped>
.list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 50px;
}
</style>