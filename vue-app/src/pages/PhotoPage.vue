<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"/>
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
import PhotoForm from "@/components/Photo/PhotoForm";

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
      axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
          .then(response => this.photos = response.data)
          .catch(error => console.log(error));
    },
    addPhoto(photo) {
      this.photos.push(photo)
    },

  },

  name: "PhotoPage"
}
</script>

<style scoped>

</style>