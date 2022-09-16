<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"/>
    <v-row>
      <Photo
          v-for="photo in $store.state.module1.photos"
          v-bind:photo="photo"
          @openPhoto="openPhoto"
      />
    </v-row>
    <PhotoDialog
        :photo="currentPhoto"
        v-model="dialogVisible"
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
      dialogVisible: false,
      test: true
    }
  },

  // Запрос перенс в PhotoModule

  mounted() {
    this.$store.dispatch("fetchPhotos")
  },

  methods: {

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