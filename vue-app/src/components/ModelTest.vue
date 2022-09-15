<template>
  <div class="mt-10">Input</div>
  <input @click="sendData" placeholder="Test" v-model="input">
  <div>Инпут: {{input}}</div>
  <div class="mt-10">Textarea</div>
  <textarea placeholder="Введите данные" v-model="textArea"/>
  <div>Данные textarea: {{textArea}}</div>
</template>

<script>
export default {
  name: "ModelTest",
  data() {
    return{
      textArea: "",
      input: "",
      model: {
        input: "",
        database: "Test"
      }
    }
  },
  methods: {
    sendData() {
      this.$emit("update:model", this.model.database)
    }
  }
}
</script>

<style scoped>

</style>