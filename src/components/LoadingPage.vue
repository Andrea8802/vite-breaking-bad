<script>
export default {
    name: "LoadingPage",
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="container-bar">
        <h1 class="text">
            Caricamento in corso..
        </h1>
        <div class="bar"></div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    .bar {
        width: 100%;
        height: 20px;
        background-color: $primary-color;
        animation: loading 3.2s linear;
    }

    .text {
        animation: loadingText 3s linear;
        text-align: center;
        font-size: 40px;
    }
}



@keyframes loading {
    0% {
        width: 0%;
    }

    25% {
        width: 20%;
    }

    50% {
        width: 50%;
        height: 20px;
    }

    80% {
        width: 70%;
        height: 50vh;
        opacity: 1;
    }

    100% {
        width: 100%;
        height: 100vh;
        opacity: 0.4;
    }
}

@keyframes loadingText {
    0% {
        opacity: 1
    }

    5% {
        opacity: 1;
    }

    60% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }

}
</style>