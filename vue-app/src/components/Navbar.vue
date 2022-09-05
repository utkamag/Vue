<template>
  <v-container fluid>
    <v-app-bar color="orange">
      <v-spacer/>
      <v-btn color="yellow" variant="outlined">
        <router-link to="/" class="text-decoration-none">Главная страница</router-link>
      </v-btn>
      <v-btn color="yellow" variant="outlined">
        <router-link to="/photo" class="text-decoration-none">Фотографии</router-link>
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