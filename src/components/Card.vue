<script>

export default {
    name: "Card",
    props: {
        infoCard: Object
    }
}

</script>

<template>
    <div class="card">
        <img :src="infoCard.image" alt="">
        <div class="name">
            {{ infoCard.name }}
        </div>
        <div class="info">
            <div class="status">
                {{ infoCard.status }}
            </div>
            <div class="species">
                {{ infoCard.species }}
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