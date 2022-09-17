import { createApp } from 'vue'
import { router } from '@/router/Router';
import App from '@/App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
