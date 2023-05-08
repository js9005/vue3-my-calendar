import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).use(Antd).mount("#app");
