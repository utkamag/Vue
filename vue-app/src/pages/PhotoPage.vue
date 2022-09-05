<template>
  <v-container>
    <Photo
        v-for="photo in photos"
    />
  </v-container>
</template>

<script>
import Photo from "@/components/Photo/Photo";

export default {
  components: {Photo},

  data: () => ({
    photos: [
      {id: 1, title: "Фото №1"},
      {id: 2, title: "Фото №2"},
      {id: 3, title: "Фото №3"}
    ]
  }),
  name: "PhotoPage"
}
</script>

<style scoped>

</style>