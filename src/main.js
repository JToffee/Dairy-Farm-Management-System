import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router/index.js";
import store from "./store/index.js";

import FontAwesomeIcon from "./util/Icons/fontAwesome.js";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount("#app");
