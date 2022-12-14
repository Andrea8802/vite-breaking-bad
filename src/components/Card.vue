<script>
export default {
    name: "Card",

}

</script>

<template>
    <div class="card">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
        <div class="name">
            Mario
        </div>
        <div class="info">
            <div class="status">
                Dead
            </div>
            <div class="species">
                Human
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    height: 300px;
    width: 180px;
    background-color: $primary-color;
    text-align: center;
    padding: 15px;

    img {
        width: 100%;
    }

    .name {
        color: white;
        font-weight: bold;
        margin-top: 10px;
    }

    .info {
        margin-top: 15px;

        .status,
        .species {
            color: gray;
            margin-top: 5px;
        }
    }


}
</style>