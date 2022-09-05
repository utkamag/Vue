<template>
  <v-container fluid>
    <v-app-bar color="orange">
      <v-btn color="black" class="ml-11">
        <router-link to="/">Главная страница</router-link>
      </v-btn>
      <v-btn color="black">
        <router-link to="/photo">Фотографии</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>