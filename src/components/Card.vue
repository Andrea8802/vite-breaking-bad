<script>
export default {
    name: "Card",

}

</script>

<template>
    <div class="card">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
        <div class="name">

        </div>
        <div class="status"></div>
        <div class="species"></div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    height: 300px;
    width: 150px;
    background-color: $primary-color;
}
</style>