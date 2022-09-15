<template>
  <div class="mt-16">
    MainPage
  </div>
  <ModelTest @update:model="model"/>
</template>

<script>
import ModelTest from "@/components/ModelTest";

export default {
  name: "MainPage",
  components: {ModelTest},
  methods: {
    model(database) {
      console.log(database)
    }
  }


}
</script>

<style scoped>

</style>