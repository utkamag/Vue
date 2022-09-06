<template>
  <v-col class="mt-16" cols="4">
    <v-card>
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-item>
        <v-img
            width="200px"
            :src="photo.url"
        />
      </v-card-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  name: "Photo"
}
</script>

<style scoped>

</style>