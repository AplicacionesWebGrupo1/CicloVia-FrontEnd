<script>
import {Parking} from "../model/parking.entity.js";
import ParkingItem from "../components/parking-item.component.vue";
import {ParkingService} from "../services/parking.service.js";

export default {
  name: "parking-management",
  components: {ParkingItem},
  data() {
    return {
      parkings: [],
      parkingService: null,
      parking: new Parking({})
    }
  },
  created(){
    this.parkingService = new ParkingService();
    this.parkingService.getAll().then(response => {
      this.parkings = response.data.map(parking => new Parking(parking));
      console.log(this.parkings);
    }).catch(error => console.error(error));
  }
}
</script>

<template>
  <div class="parking-container">
    <h1>{{ $t('option.near') }}</h1>
    <div class="parkings-list">
      <parking-item v-for="parking in parkings" :key="parking.id" :parking="parking"></parking-item>
    </div>
  </div>
</template>

<style scoped>
.parking-container{
  text-align: center;
}
.parkings-list{
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

</style>