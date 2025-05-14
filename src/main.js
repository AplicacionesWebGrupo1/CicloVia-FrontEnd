import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n.js";
import PrimeVue from "primevue/config";
import {Avatar, Button, Card, Drawer, Menu, Menubar, SelectButton, Toolbar, Tooltip} from 'primevue';
import Material from '@primevue/themes/material';


const app = createApp(App)
app
    .use(PrimeVue, { ripple: true, theme:{ preset: Material }})
    .component('pv-button',Button)
    .component('pv-card',Card)
    .component('pv-select-button',SelectButton)
    .component('pv-drawer',Drawer)
    .component('pv-avatar',Avatar)
    .component('pv-menu',Menu)
    .component('pv-image', Image)
    .component('pv-menubar',Menubar)
    .component('pv-toolbar',Toolbar)
    .component('pv-tooltip', Tooltip)
    .use(i18n)
    .mount("#app")