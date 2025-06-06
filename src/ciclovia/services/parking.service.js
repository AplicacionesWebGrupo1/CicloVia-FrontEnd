import httpInstance from "@/shared/services/http.instance.js";


export class ParkingService{
    resourceEndpoint = "/parkings";
    reviewsEndpoint = "/reviews";

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
