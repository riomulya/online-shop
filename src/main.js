import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import store from './modules/index.js';
import router from './router.js';
import BaseButton from '../src/components/UI/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);

router.isReady().then(() => {
  app.mount('body');
});
