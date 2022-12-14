<script>
import CardList from './CardList.vue'

export default {
  name: "Main",
  components: {
    CardList
  }
}
</script>

<template>
  <main>

    <section>
      <div class="found">
        Found 62 characters
      </div>

      <CardList />

    </section>

  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
  background-color: $primary-color;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  section {
    background-color: white;
    height: 450px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .found {
      background-color: $secondary-color;
      color: white;
      width: 90%;
      padding: 15px 10px;
      font-size: 12px;
      font-weight: bold;
    }
  }
}
</style>
