<template>
  <v-col class="mt-16" cols="4">
    <v-card @click="openPhoto">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-item>
        <v-img
            width="200px"
            height="200px"
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
  methods: {
    openPhoto() {
      this.$emit("openPhoto", this.photo)
    }
  },
  name: "Photo"
}
</script>

<style scoped>

</style>