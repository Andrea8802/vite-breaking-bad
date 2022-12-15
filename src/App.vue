<script>
import Main from './components/Main.vue'
import { store } from './store.js'

export default {
  name: "App",
  components: {
    Main
  },

  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <header></header>

  <Main :msg="store.title" />

  <footer></footer>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

header,
footer {
  background-color: $secondary-color;
  height: 60px;
  width: 100%;
}

main {
  position: relative;
}
</style>
