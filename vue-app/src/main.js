import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import router from "@/router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "@/store";

loadFonts()

createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')

