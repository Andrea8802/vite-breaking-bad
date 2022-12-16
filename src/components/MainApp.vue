<script>
import CardList from './CardList.vue'
import { store } from '../store.js'
import SelectorCharacters from './SelectorCharacters.vue';
import FoundCharacters from './FoundCharacters.vue';

export default {
  name: "MainApp",
  components: {
    CardList,
    SelectorCharacters,
    FoundCharacters
  },

  data() {
    return {
      store
    }
  },

  props: {
    msg: String,
    charactersFunction: Function

  }

}
</script>

<template>
  <main>

    <!-- Parte sopra del main -->
    <section class="top">

      <!-- Titolo e logo -->
      <img src="../assets/img/rickAndMortyLogo.jpg" alt="">
      <h1>
        {{ msg }}
      </h1>

      <SelectorCharacters @selected="charactersFunction" />
    </section>

    <!-- Parte centrale main -->
    <section class="container">
      <section>


        <FoundCharacters />

        <CardList />

        <button>
          Load More
        </button>
      </section>
    </section>

  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;


// Parte sopra main
.top {
  background-color: $primary-color;
  color: white;
  @include d-flex(start, center);
  gap: 10px;
  padding: 10px 0 0 10px;

  img {
    width: 45px;
    border-radius: 50%;
  }
}

// Parte centrale main
.container {
  background-color: $primary-color;
  min-height: calc(100vh - 120px);
  @include d-flex(center, flex-end);


  section {
    background-color: white;
    min-height: 450px;
    width: 70%;
    margin: 70px 0 0;
    @include d-flex(evenly, center);
    flex-direction: column;

    button {
      margin: 30px 0;
      font-size: 18px;
      background-color: $secondary-color;
      color: white;
      border: none;
      padding: 8px 16px;
      font-weight: bold;
      cursor: pointer;


      &:hover {
        background-color: $primary-color;
        outline: 1px solid $primary-color;
      }
    }

  }
}
</style>
