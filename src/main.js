import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import store from './modules/index.js';
import router from './router.js';

const app = createApp(App);

app.use(router);
app.use(store);

router.isReady().then(() => {
  app.mount('body');
});
