<script>
import { store } from '../store.js'

export default {
    name: "FoundCharacters",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="found">
        Found {{ store.infoAPI.count }} characters
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;

.found {
    background-color: $secondary-color;
    color: white;
    width: 97%;
    padding: 15px 10px;
    margin: 20px;
    font-size: 14px;
    font-weight: bold;
}
</style>