<template>
  <div class="mt-12">{{photo.id + photo.title}}</div>
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