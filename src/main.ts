import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import router from './router'
import store from './store'
import element from './plugins/element'
import './index.css'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(element)
  .mount('#app')
