import { createApp } from "vue";
import "./index.css";
import { createPinia } from "pinia";
import router from "./router";
import piniaPersist from "pinia-plugin-persist";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPersist);

createApp(App).use(pinia).use(router).mount("#app");
