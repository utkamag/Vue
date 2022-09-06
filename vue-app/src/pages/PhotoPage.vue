<template>
  <v-container>
    <PhotoForm/>
    <v-row>
      <Photo
          v-for="photo in photos"
          v-bind:photo="photo"
      />
    </v-row>
  </v-container>
</template>

<script>
import Photo from "@/components/Photo/Photo";
import axios from "axios";
import PhotoForm from "@/components/PhotoForm";

export default {
  components: {Photo, PhotoForm},

  data() {
    return {
      photos: []
    }
  },
  mounted() {
    this.fetchToDo()
  },

  methods: {
    fetchToDo() {
      axios.get("https://jsonplaceholder.typicode.com/photos")
          .then(response => this.photos = response.data)
          .catch(error => console.log(error));
    }
  },

  name: "PhotoPage"
}
</script>

<style scoped>

</style>