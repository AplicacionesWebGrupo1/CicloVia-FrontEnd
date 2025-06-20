import httpInstance from '@/shared/services/http.instance.js';

const endpoint = "/routes";

export default {
    getAll() {
        return httpInstance.get(endpoint);
    },
    create(route) {
        return httpInstance.post(endpoint, route);
    },
};
