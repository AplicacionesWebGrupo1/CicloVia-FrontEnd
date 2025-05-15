<template>
  <div class="routes-page">
    <h1>Routes Management</h1>
    <route-item-create @route-added="fetchRoutes" />
    <ul>
      <li v-for="route in routes" :key="route.id">
        <strong>{{ route.name }}</strong>: {{ route.startPoint }} → {{ route.endPoint }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import routesService from '@/modules/routes/services/routes.service.js';
import RouteItemCreate from '@/modules/routes/components/route-item-create.component.vue';

export default {
  name: 'RoutesPage',
  components: {
    RouteItemCreate,
  },
  setup() {
    const routes = ref([]);

    const fetchRoutes = async () => {
      try {
        const response = await routesService.getAll();
        routes.value = response.data;
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    onMounted(() => {
      fetchRoutes();
    });

    return {
      routes,
      fetchRoutes,
    };
  },
};
</script>
