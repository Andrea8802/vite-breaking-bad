<script>
import Main from './components/Main.vue'

export default {
  name: "App",
  components: {
    Main
  }
}

</script>

<template>
  <header></header>

  <Main />

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
</style>
