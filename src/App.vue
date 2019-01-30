<template>
  <div id="app">
      <Table />
  </div>
</template>

<script>
import Table from "./components/Table/Table"

export default {
  name: 'app',
  components: {
    Table
  },
  mounted(){
    this.$store.dispatch('fetchInitialData')
  }
}
</script>

<style lang="scss">

@import "./global.scss";

</style>
