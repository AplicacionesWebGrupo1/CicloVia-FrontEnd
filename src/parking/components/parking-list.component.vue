<script>
import ParkingItem from "@/parking/components/parking-item.component.vue";

export default{
  name: "parking-list.component",
  components: {ParkingItem},
  props: {
    parkings:{
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div v-for="parking in parkings" :key="parking.id">
    <parking-item :parking="parking"></parking-item>
  </div>

</template>

<style scoped>

</style>