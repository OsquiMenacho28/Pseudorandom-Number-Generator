import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "animate.css/animate.min.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetAlert from "vue-sweetalert2";

createApp(App).use(router).use(VueSweetAlert).mount("#app");
