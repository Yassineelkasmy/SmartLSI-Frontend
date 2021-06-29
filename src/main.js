import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBorderAll, faBook, faUserPlus, faTimes, faUserGraduate, faEdit, faSearch, faUserTie, faCalendarWeek, faEnvelope, faComment, faAddressBook, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faBorderAll, faBook, faUserPlus, faTimes, faEdit,faUserGraduate, faSearch, faUserTie, faCalendarWeek, faEnvelope, faComment, faAddressBook, faUserShield)
createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount("#app");