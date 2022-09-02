<template>
  <v-app>
    <Navbar/>
    <MainPage/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";

export default {
  name: 'App',
  components: {Navbar, MainPage},

}
</script>
