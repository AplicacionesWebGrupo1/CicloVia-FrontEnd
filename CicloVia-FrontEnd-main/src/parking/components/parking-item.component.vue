<script>

import {Card as PvCard} from "primevue";
import {Parking} from "../model/parking.entity.js";

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
    <template #title>
      <h1>{{parking.name}}</h1>
    </template>
    <template #content>
      <p>Latitud: {{ parking.latitude}}</p>
      <p>Longitud{{ parking.length}}</p>
      <p>Espacios totales: {{ parking.total_spaces}}</p>
      <p>Espacios disponibles: {{ parking.available_spaces}}</p>
    </template>
  </pv-card>
  
</template>

<style scoped>

</style>