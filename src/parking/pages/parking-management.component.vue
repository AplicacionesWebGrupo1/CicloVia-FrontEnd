<script>

import {Parking} from "@/parking/model/parking.entity.js";

export default{
  name: "parking-management.component",
  data(){
    return {
      title: {singular: "Parking", plural: "Parkings"},
      parkings: [],
      parking: new Parking({}),
      selectedParking: [],
      parkingService: null
    }
  }
}
</script>

<template>
  <data-manager></data-manager>
</template>

<style scoped>

</style>