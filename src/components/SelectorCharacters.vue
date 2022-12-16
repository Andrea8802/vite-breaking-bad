<script>
import { store } from '../store.js'
export default {
    name: "SelectorCharacters",
    data() {
        return {
            chosenOption: ""
        }
    },
    methods: {
        changed() {
            store.valueSelected = `?status=${this.chosenOption}`;
        }
    }
}

</script>

<template>

    <div class="container-status">
        <label for="status">
            Status:
        </label>

        <select id="status" v-model="chosenOption" @change="changed(), $emit('selected')">

            <option value="">
                Tutti
            </option>

            <option value="Alive">
                Alive
            </option>

            <option value="Dead">
                Dead
            </option>

            <option value="unknow">
                Unknow
            </option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
.container-status {
    position: absolute;
    top: 80px;
    left: 240px;

    select {
        padding: 5px 10px;

    }
}
</style>