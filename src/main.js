import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import './assets/tailwind.css'
import Toast from "vue-toastification"
// Import the CSS
import "vue-toastification/dist/index.css"

const app = createApp(App)

const options = {
    // Toast Options
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
}

app.use(Toast, options)
app.use(router).mount('#app')
