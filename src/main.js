import { createApp } from "vue";
import App from "./App.vue";

import "./assets/style.css";

/* fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin, faGithub);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");