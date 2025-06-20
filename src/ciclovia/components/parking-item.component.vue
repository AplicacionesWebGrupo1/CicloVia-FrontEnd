<script>
import {Button as PvButton, Card as PvCard, SelectButton as PvSelectButton} from "primevue";
import {Parking} from "../model/parking.entity.js";

export default{
  name: "parking-item",
  components: {PvButton, PvSelectButton, PvCard},
  props: {
    parking: {
      type: Parking,
      required: true,
    }
  }
}
</script>

<template>
  <pv-card class="parking-card">
    <template #title>
      {{parking.name}}
    </template>
    <template #content>
      <p>Espacios totales: {{ parking.total_spaces}}</p>
      <p>Espacios disponibles: {{ parking.available_spaces}}</p>
    </template>
    <template #footer>
      <router-link :to="`/parking/${parking.id}/review`">
        <pv-button label="Reseñas"></pv-button>
      </router-link>
    </template>
  </pv-card>
</template>

<style scoped>

</style>