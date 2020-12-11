import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import './styles/index.scss';

import icons from './plugins/icons';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'medium' })
  .use(icons)
  .mount('#app');
