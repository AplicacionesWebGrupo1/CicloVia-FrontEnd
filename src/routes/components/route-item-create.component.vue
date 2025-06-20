<template>
  <div class="route-create">
    <h2>{{ $t('routes.addRoute') }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label for="name">Name:</label>
        <input id="name" v-model="route.name" type="text" required />
      </div>
      <div class="field">
        <label for="startPoint">Start Point:</label>
        <input id="startPoint" v-model="route.startPoint" type="text" required />
      </div>
      <div class="field">
        <label for="endPoint">End Point:</label>
        <input id="endPoint" v-model="route.endPoint" type="text" required />
      </div>
      <button type="submit">Add Route</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import routesService from '@/routes/services/routes.service.js';

export default {
  name: 'RouteItemCreate',
  emits: ['route-added'],
  setup(props, { emit }) {
    const route = ref({
      name: '',
      startPoint: '',
      endPoint: '',
    });

    const onSubmit = async () => {
      try {
        await routesService.create(route.value);
        route.value = { name: '', startPoint: '', endPoint: '' };
        emit('route-added');
        alert('Route added successfully');
      } catch (error) {
        alert('Failed to add route');
        console.error(error);
      }
    };

    return {
      route,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.route-create {
  max-width: 400px;
  margin: 1rem auto;
}
.field {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
input {
  width: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
}
button {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
