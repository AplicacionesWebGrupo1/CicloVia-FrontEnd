<template>
  <div class="route-list">
    <h2>Routes List</h2>
    <ul>
      <li v-for="route in routes" :key="route.id">
        <strong>{{ route.name }}</strong>: {{ route.startPoint }} → {{ route.endPoint }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import routesService from '@/routes/services/routes.service.js';

export default {
  name: 'RouteItemList',
  setup() {
    const routes = ref([]);

    const loadRoutes = async () => {
      try {
        const response = await routesService.getAll();
        routes.value = response.data;
      } catch (error) {
        console.error('Failed to load routes:', error);
      }
    };

    onMounted(() => {
      loadRoutes();
    });

    return {
      routes
    };
  }
};
</script>

<style scoped>
.route-list {
  max-width: 600px;
  margin: 1rem auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  border-bottom: 1px solid #ddd;
}
</style>
