import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import router from "@/router";
import axios from "axios";
import VueAxios from "vue-axios";

loadFonts()

createApp(App)
    .use(Vuex)
    .use(VueAxios, axios)
    .use(router)
    .use(vuetify)
    .mount('#app')

