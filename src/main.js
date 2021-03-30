import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowAltCircleUp,
  faPhoneSquareAlt,
  faAt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
  faArrowAltCircleUp,
  faFacebook,
  faInstagram,
  faPhoneSquareAlt,
  faAt,
  faChevronDown,
  faFontAwesome
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
