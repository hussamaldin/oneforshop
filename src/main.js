import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import './index.css'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()
createApp(App).use(store).use(router).mount('#app')
