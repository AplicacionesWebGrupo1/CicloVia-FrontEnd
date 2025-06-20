<script>
import RouteItemCreate from '../components/route-item-create.component.vue';
import { RouteService } from '../services/routes.service.js';


export default {
  name: 'route-management',
  components: { RouteItemCreate },
  data() {
    return {
      routes: [],
      routeService: null
    };
  },
  methods: {
    loadRoutes() {
      this.routeService.getAll().then(response => {
        this.routes = response.data;
      }).catch(error => console.error(error));
    },
    handleNewRoute(route) {
      this.routeService.create(route).then(response => {
        this.routes.push(response.data);
        this.$toast.add({
          severity: 'success',
          summary: this.$t('success'),
          detail: this.$t('route_added'),
          life: 3000
        });
      }).catch(error => console.error(error));
    }
  },
  created() {
    this.routeService = new RouteService();
    this.loadRoutes();
  }
};
</script>

<template>
  <div class="p-4">
    <pv-toast />
    <route-item-create @new-route-added="handleNewRoute" />

    <pv-card v-for="route in routes" :key="route.id" class="mb-3">
      <template #title>{{ route.name }}</template>
      <template #content>
        <div><strong>{{ $t('origin') }}:</strong> {{ route.origin }}</div>
        <div><strong>{{ $t('destination') }}:</strong> {{ route.destination }}</div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.p-card {
  border-left: 5px solid #3b82f6;
}
</style>
