<script>
export default {
    name: "LoadingPage",
}
</script>

<template>
    <div class="container-loading">
        <h1 class="text">
            Caricamento in corso...
        </h1>
        <div class="loadingio-spinner-gear-f0mtz7bp0po">
            <div class="ldio-v1wmmbvxu7">
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.container-loading {
    height: 100vh;
    width: 100%;
    @include d-flex (center, center);
    flex-direction: column;

    .text {
        color: $secondary-color;
        font-size: 40px;
    }
}

@keyframes ldio-v1wmmbvxu7 {
    0% {
        transform: rotate(0deg)
    }

    50% {
        transform: rotate(22.5deg)
    }

    100% {
        transform: rotate(45deg)
    }
}

.ldio-v1wmmbvxu7>div {
    transform-origin: 100px 100px;
    animation: ldio-v1wmmbvxu7 0.2s infinite linear;
}

.ldio-v1wmmbvxu7>div div {
    position: absolute;
    width: 22px;
    height: 152px;
    background: $primary-color;
    left: 100px;
    top: 100px;
    transform: translate(-50%, -50%);
}

.ldio-v1wmmbvxu7>div div:nth-child(1) {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.ldio-v1wmmbvxu7>div div:nth-child(6) {
    width: 80px;
    height: 80px;
    background: #f1f2f3;
    border-radius: 50%;
}

.ldio-v1wmmbvxu7>div div:nth-child(3) {
    transform: translate(-50%, -50%) rotate(45deg)
}

.ldio-v1wmmbvxu7>div div:nth-child(4) {
    transform: translate(-50%, -50%) rotate(90deg)
}

.ldio-v1wmmbvxu7>div div:nth-child(5) {
    transform: translate(-50%, -50%) rotate(135deg)
}

.loadingio-spinner-gear-f0mtz7bp0po {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
}

.ldio-v1wmmbvxu7 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
}

.ldio-v1wmmbvxu7 div {
    box-sizing: content-box;
}
</style>