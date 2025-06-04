import httpInstance from "@/shared/services/http.instance.js";


export class ParkingService{
    resourceEndpoint = import.meta.env.VITE_PARKINGS_ENDPOINT_PATH;
    reviewsEndpoint = import.meta.env.VITE_REVIEWS_ENDPOINT_PATH;

    getAll(){
        return httpInstance.get(this.resourceEndpoint);
    }

    getReviewsForParkingId(parkingId) {
        return httpInstance.get(`${this.reviewsEndpoint}?parkingId=${parkingId}`);
    }

    createReview(parkingId, review) {
        return httpInstance.post(this.reviewsEndpoint, {...review, parkingId});
    }

    deleteReview(reviewId) {
        return httpInstance.delete(`${this.reviewsEndpoint}/${reviewId}`);
    }
}