<script>
import {Parking} from "../model/parking.entity.js";
import DataManager from "../../shared/data-manager.component.vue";
import ParkingItem from "../components/parking-item.component.vue";
import {ParkingService} from "../services/parking.service.js";

export default {
  name: "parking-management",
  components: {ParkingItem, DataManager},
  data() {
    return {
      parkings: [],
      parking: new Parking({}),
    }
  },
  methods: {
    findIndexById(id) {
      return this.parkings.findIndex(parking => parking.id === id);
    },
    created() {
      this.parkingService = new ParkingService();
      this.parkingService.getAll().then(response => {
        this.parkings = response.data.map(parking => new Parking(parking));
        console.log(this.parkings);
      }).catch(error => console.error(error));
    }
  }
}
</script>

<template>
  <div class="w-full">
    <data-manager></data-manager>
  </div>


  <div v-for="parking in parkings" :key="parking.id">
    <h1>{{ parking.name}}</h1>
    <h2>color</h2>
    <parking-item :parking="parking"></parking-item>
  </div>

</template>

<style scoped>

</style>