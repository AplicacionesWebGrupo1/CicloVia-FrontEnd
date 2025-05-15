import httpInstance from '@/shared/services/http.instance.js';

const endpoint = import.meta.env.VITE_ROUTES_ENDPOINT_PATH;

export default {
    getAll() {
        return httpInstance.get(endpoint);
    },
    create(route) {
        return httpInstance.post(endpoint, route);
    },
};
