<template>
    <div class="table">
        <span class="table__title">current {{base_currency}} exchange course</span>
        <div class="table__button-wrapper">
            <div class="table__button scale-in-center"
                 v-if="exchange_data"
                 :class="{'disabled': exchange_data && Object.keys(exchange_data).includes('CAD')}"
                 @click="addCurrencyHandler($event, 'CAD')">Add CAD
            </div>
            <div class="table__button scale-in-center"
                 v-if="exchange_data"
                 :class="{'disabled': Object.keys(exchange_data).includes('JPY')}"
                 @click="addCurrencyHandler($event, 'JPY')">Add JPY
            </div>
        </div>
        <div class="table__container scale-in-center" v-if="exchange_data">
            <transition-group name="slide-fade">
                <CurrencyRow
                        v-for="(row, $index) in exchange_data"
                        :key="row"
                        :currency="$index"
                        :rate="row"
                >{{row}}
                </CurrencyRow>
            </transition-group>
        </div>
    </div>
</template>

<script>
  import CurrencyRow from "./CurrencyRow/CurrencyRow"
  import {mapState} from "vuex";

  export default {
    name: "Table",
    components: {CurrencyRow},
    computed: {
      ...mapState(["base_currency", "exchange_data"])
    },
    methods: {
      addCurrencyHandler(e, type) {
        e.preventDefault();
        e.stopPropagation();

        this.$store.dispatch("addCurrency", type)
      }
    }
  }
</script>

<style scoped lang="scss">

    @import "Table.scss";

</style>
