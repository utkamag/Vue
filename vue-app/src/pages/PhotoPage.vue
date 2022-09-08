<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"/>
    <v-row>
      <Photo
          v-for="photo in photos"
          v-bind:photo="photo"
          @openPhoto="openPhoto"
      />
    </v-row>
    <PhotoDialog
        :photo="currentPhoto"
        :dialog-visible="dialogVisible"
    />
  </v-container>
</template>

<script>
import Photo from "@/components/Photo/Photo";
import axios from "axios";
import PhotoForm from "@/components/Photo/PhotoForm";
import PhotoDialog from "@/components/Photo/PhotoDialog";

export default {
  components: {PhotoDialog, Photo, PhotoForm},

  data() {
    return {
      photos: [],
      currentPhoto: {},
      dialogVisible: false
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

    openPhoto(photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    },

  },

  name: "PhotoPage"
}
</script>

<style scoped>

</style>