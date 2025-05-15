import {Parking} from "@/parking/model/parking.entity.js";
import {createRouter, createWebHistory} from "vue-router";

const ParkingComponent = () => import('../parking/components/parking-list.component.vue')

const routes = [
    {path: 'parking', name: 'Parking', component: ParkingComponent},
]

const router = createRouter({history: createWebHistory(import.meta.env.BASE_URL),
routes: routes});

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'CicloVia';
    document.title = `${baseTitle} | ${to.meta['title']}`;
});

export default router;