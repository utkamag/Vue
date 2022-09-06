<template>
  <v-container>
    <v-row class="d-flex mt-16">
      <v-text-field placeholder="Наименование фото" v-model="title"/>
      <v-file-input placeholder="добавить фото..." v-model="img"/>
      <v-btn @click="addPhoto">Добавить фото</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PhotoForm",
  data() {
    return{
      title: "",
      img: ""
    }
  },
  methods: {
    addPhoto() {

    }
  }
}
</script>

<style scoped>

</style>