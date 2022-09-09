<template>
  <v-dialog
      v-model="dialogVisible"
  >
    <v-card width="700px"
            height="500px">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img
            :src="photo.url"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PhotoDialog",
  data() {
    return{
      dialogVisible: false
    }
  },
  props: {
    photo: {
      type: Object,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.dialogVisible = this.value
  }
}
</script>

<style scoped>

</style>