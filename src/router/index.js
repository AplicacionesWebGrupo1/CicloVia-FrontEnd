import {createRouter, createWebHistory} from "vue-router";

const HomeComponent = () => import('../public/pages/home.component.vue');
const ParkingManagementComponent = () => import('../ciclovia/pages/parking-management.component.vue');
const ReviewManagementComponent = () => import('../ciclovia/pages/review-management.component.vue');
const PageNotFoundComponent = () => import('../public/pages/page-not-found.component.vue');

const routes = [
    {   path: '/home',                  name: 'home',       component: HomeComponent,               meta: {title: 'Home'}},
    {   path: '/parking', name: 'parking', component: ParkingManagementComponent, meta: {title: 'Parking'}},
    {   path: '/parking/:id/review', name: 'review', component: ReviewManagementComponent, meta: {title: 'Review'}},
    {   path: '/',                      name: 'default',    redirect: {name: 'home'}},
    {   path: '/:pathMatch(.*)*',       name: 'not-found',  component: PageNotFoundComponent,       meta: {title: 'Page not found'}},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,

});

router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    // Set the page title
    let baseTitle = 'CicloVia';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});
export default router;