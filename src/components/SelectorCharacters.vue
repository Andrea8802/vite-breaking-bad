<script>
import { store } from '../store.js'
export default {
    name: "SelectorCharacters",
    data() {
        return {
            optionChioice: ""
        }
    },
    methods: {
        changed() {
            store.valueSelected = `?status=${this.optionChioice}`;
        }
    }
}

</script>

<template>

    <select v-model="optionChioice" @change="changed(), $emit('selected')">

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

</template>

<style lang="scss" scoped>
select {
    padding: 5px 10px;
    position: absolute;
    top: 80px;
    left: 240px;
}
</style>