<template>
  <v-container>
    <v-app-bar color="orange">
      <h2 class="ml-15">Vue</h2>
      <v-spacer/>
      <router-link to="/" class="text-decoration-none">
        <v-btn class="ml-10" color="yellow" variant="flat">Главная страница</v-btn>
      </router-link>
      <router-link to="/photo" class="text-decoration-none">
        <v-btn class="ml-10 mr-4" color="yellow" variant="flat">Фотографии</v-btn>
      </router-link>
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