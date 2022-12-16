<script>
import MainApp from './components/MainApp.vue'
import LoadingPage from './components/LoadingPage.vue'
import { store } from './store.js'
import axios from 'axios';

export default {
  name: "App",
  components: {
    MainApp,
    LoadingPage
  },

  data() {
    return {
      store,
      inLoading: true,
      errorLoading: false
    }
  },
  methods: {
    charactersSelected() {
      axios
        .get(`${store.apiURL}${store.valueSelected}`)
        .then(res => {
          store.characterList = res.data.results
          store.infoAPI = res.data.info


        })
        .catch(err => {
          console.log("Errore: ", err);
          this.errorLoading = true

        })
        .finally(() => {
          if (!this.errorLoading) {
            this.inLoading = false
          }

        })

    },

  },

  mounted() {
    this.charactersSelected();
  }
}

</script>

<template>
  <LoadingPage v-if="inLoading" />

  <div v-else="">
    <header></header>

    <MainApp :charactersFunction="charactersSelected()" :msg="store.title" />

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
