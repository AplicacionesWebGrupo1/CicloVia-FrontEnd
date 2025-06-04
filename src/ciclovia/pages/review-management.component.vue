<script>
import ReviewItem from "@/ciclovia/components/review-item.component.vue";
import {Review} from "@/ciclovia/model/review.entity.js";
import {ParkingService} from "@/ciclovia/services/parking.service.js";
import {Button as PvButton, Toolbar as PvToolbar} from "primevue";
import Create from "@/shared/components/create.component.vue";
import DataManager from "@/shared/components/data-manager.component.vue";
import ReviewItemCreateDialog from "@/ciclovia/components/review-item-create.component.vue";

export default {
  name: "review-management",
  components: {ReviewItemCreateDialog, DataManager, Create, PvButton, PvToolbar, ReviewItem},
  emits: ['cancel-requested', 'save-requested'],
  data() {
    return {
      submitted: false,
      item: null,
      visible: false,
      reviews: [],
      parkingService: null,
      createDialogIsVisible: false,
      review: new Review({}),
    }
  },
  methods: {
    notifySuccessfulAction(message) {
      this.$toast.add({severity: 'success', summary: 'Success', detail: message, life: 3000});
    },
    findIndexById(id) {
      return this.reviews.findIndex(review => review.id === id);
    },
    onNewItem() {
      this.review = new Review({});
      this.submitted = false;
      this.createDialogIsVisible = true;
      console.log(this.createDialogIsVisible);
    },
    onDeleteItem(item) {
      this.review = {...item};
      this.deleteReview();
    },
    onCancelRequested() {
      this.createDialogIsVisible = false;
      this.submitted = false;
    },
    onSaveRequested(item) {
      console.log('onSaveRequested');
      this.submitted = true;
      if (item && item.title && item.content && item.title.trim() && item.content.trim()) {
        this.createNewReview(item);
        this.createDialogIsVisible = false;
      }
    },
    createNewReview(item) {
      const parkingId = this.$route.params.id;
      this.parkingService.createReview(parkingId,item).then(response => {
        let review = new Review(response.data);
        this.reviews.push(review);
        this.notifySuccessfulAction("Review Created");
      }).catch(error => console.error(error));
    },
    deleteReview() {
      this.parkingService.deleteReview(this.review.id).then(() => {
        let index = this.findIndexById(this.review.id);
        this.reviews.splice(index, 1);
        this.notifySuccessfulAction("Review Deleted");
      }).catch(error => console.error(error));
    }
  },
  created(){
    const parkingId = this.$route.params.id;
    this.parkingService = new ParkingService();
    this.parkingService.getReviewsForParkingId(parkingId).then(response => {
      this.reviews = response.data.map(review => new Review(review));
      console.log(this.reviews);
    }).catch(error => console.error(error));
  }
}
</script>

<template>
  <div class="parking-container">
    <h1>{{ $t('option.review') }}</h1>
    <pv-toolbar>
      <template #center>
        <pv-button class="mr-2" icon="pi pi-plus" label="New" severity="success" @click="onNewItem"/>
      </template>
    </pv-toolbar>
    <div class="review-list">
      <div v-if="reviews.length === 0">
        <h1>No hay reseñas</h1>
      </div>
      <review-item v-else v-for="review in reviews" :key="review.id" :review="review"></review-item>
    </div>
  </div>
  <review-item-create-dialog
      :item="review"
      :visible="createDialogIsVisible"
      @cancel-requested="onCancelRequested"
      @save-requested="onSaveRequested"/>
</template>

<style scoped>
.parking-container{
  text-align: center;
}
.review-list{
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding-top: 15px;
}

</style>