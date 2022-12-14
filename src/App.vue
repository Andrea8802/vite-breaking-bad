<script>
import Container from './components/Container.vue'
import { store } from './store.js'

export default {
  name: "App",
  components: {
    Container
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

  <main>
    <Container :msg="store.title" />
  </main>

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
