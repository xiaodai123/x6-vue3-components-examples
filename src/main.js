import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'x6-vue3-components/lib/x6-vue3-components.min.css';
import X6Vue3Components from 'x6-vue3-components';

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(X6Vue3Components)
app.mount('#app')
