<script>

import {Card as PvCard} from "primevue";
import {Parking} from "@/parking/model/parking.entity.js";

export default{
  name: "parking-item",
  components: {PvCard},
  emits: ["show-tooltip"],
  props: {
    parking: {
      type: Parking,
      required: true,
    }
  }
}
</script>

<template>
  <pv-card>
    <template #header>
      <h1>hola</h1>
    </template>
    <template #title>
      {{ parking.latitude}}
      {{ parking.length}}
      {{ parking.total_spaces}}
      {{ parking.available_spaces}}
    </template>
  </pv-card>
  
</template>

<style scoped>

</style>