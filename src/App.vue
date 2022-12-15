<script>
import MainApp from './components/MainApp.vue'
import LoadingPage from './components/LoadingPage.vue'
import { store } from './store.js'

export default {
  name: "App",
  components: {
    MainApp,
    LoadingPage
  },

  data() {
    return {
      store,
      inLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.inLoading = false;

    }, 3000)
  }
}

</script>

<template>
  <LoadingPage v-if="inLoading" />

  <div v-else="">
    <header></header>

    <MainApp :msg="store.title" />

    <footer></footer>
  </div>

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
