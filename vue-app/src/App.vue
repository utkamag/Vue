<template>
  <v-app>
    <Navbar/>
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import MainPage from "@/pages/MainPage";

export default {
  name: 'App',
  components: {
    Navbar
  },

}
</script>
