import httpInstance from "@/shared/services/http.instance.js";

export class ParkingService{
    resourceEndpoint = import.meta.env.VITE_PARKINGS_ENDPOINT_PATH;

    getAll(){
        return httpInstance.get(this.resourceEndpoint);
    }

    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }
}