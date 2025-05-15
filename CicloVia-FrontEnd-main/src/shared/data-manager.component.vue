<script>
import {FilterMatchMode} from '@primevue/core/api';
import ParkingItem from "../parking/components/parking-item.component.vue";

export default {
  name: "data-manager",
  components: {ParkingItem},
  inheritAttrs: false,
  props: {
    parkings: {type: Array, default:[]},
    title:  {type: { singular: '', plural: ''}, required: true},
    dynamic: {type: Boolean, default: false},
    columns: {type: Array, default:[]},
  },
  data() {
    return {
      filters: null,
      parkings: []
    }
  },
  methods: {
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    }
  },
  created() {
    this.initFilters();
  }
}
</script>

<template>
  <h1>Estacionamientos cercanos</h1>

  <div v-for="parking in parkings" :key="parking.id">
    <parking-item :parking="parking"/>
  </div>
</template>

<style scoped>

</style>