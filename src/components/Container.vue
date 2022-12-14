<script>
import CardList from './CardList.vue'
import { store } from '../store.js'

export default {
  name: "Container",
  components: {
    CardList
  },
  data() {
    return {
      store,
    }
  },
  props: ["msg"]
}
</script>

<template>
  <section class="top">
    <img src="../assets/img/rickAndMortyLogo.jpg" alt="">
    <h1>
      {{ msg }}
    </h1>
    <select>
      <option>
        Select Category
      </option>

      <option>
        Coming Soon..
      </option>
    </select>

  </section>
  <section class="container">
    <section>
      <div class="found">
        Found {{ store.infoAPI.count }} characters
      </div>

      <CardList />
      <button>
        Load More
      </button>
    </section>

  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.top {
  background-color: $primary-color;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 0 10px;

  img {
    width: 45px;
    border-radius: 50%;
  }

  select {
    padding: 5px 10px;
    position: absolute;
    top: 80px;
    left: 240px;
  }

}

.container {
  background-color: $primary-color;
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  section {
    background-color: white;
    min-height: 450px;
    width: 70%;
    margin: 70px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .found {
      background-color: $secondary-color;
      color: white;
      width: 90%;
      padding: 15px 10px;
      margin: 20px;
      font-size: 14px;
      font-weight: bold;
    }

    button {
      margin: 30px 0;
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
