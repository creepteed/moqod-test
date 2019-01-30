<template>
    <div class="curr-row">
        <span class="curr-row__title" :class="{'highlighted': highlight}">{{currency}}: </span>
        <span class="curr-row__value" :class="{'highlighted': highlight}">{{rate.toFixed(5)}} [ {{(1/rate).toFixed(2)}} {{base_currency}} ]</span>
        <div class="curr-row__update" @click="updateHandler"></div>
    </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "CurrencyRow",
    props: ["currency", "rate"],
    computed: {
      ...mapState(["base_currency"])
    },
    data(){
      return {
        highlight: false
      }
    },
    methods: {
      updateHandler(){
        this.$store.dispatch('updateCurrency',
          { currency: this.currency,
            pointer: this,
            highlight_timeout: 200 });
      }
    }
  }
</script>

<style scoped lang="scss">

    @import "CurrencyRow.scss";

</style>
