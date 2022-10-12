import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "tw-elements";

const pinia = createPinia();
const app = createApp(App);
pinia.use(piniaPluginPersistedstate);
app.use(router).use(pinia);
app.use(router);

app.mount("#app");
