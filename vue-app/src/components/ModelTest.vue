<template>
  <div class="container">
    <!-- Связываем инпут с глобальным стором -->
    <div class="input">
      <h2 class="input__first">Input</h2>
      <input @click="$store.comit('input')" placeholder="Введите данные..." v-model="$store.state.module1.input">
      <div>Результат: {{ $store.state.module1.input }}</div>
    </div>
    <div class="textarea">
      <h2 class="mt-10">Textarea</h2>
      <textarea placeholder="Введите данные..." v-model="textArea"/>
      <div @click="$store.commit('setState', 12)">Результат: {{ $store.state.module1.test }}{{ textArea }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelTest",
  data() {
    return {
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

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  width: auto;
}

.input {
  margin-top: 10px;
  padding: 10px;
  background: burlywood;
  border-radius: 10px;

  &__first {

  }
}

.textarea {
  margin-top: 10px;
  padding: 10px;
  background: burlywood;
  border-radius: 10px;
}


</style>