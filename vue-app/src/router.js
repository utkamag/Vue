import {createRouter, createWebHistory} from "vue-router"
import MainPage from "@/pages/MainPage";
import PhotoPage from "@/pages/PhotoPage";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: MainPage},
        {path: "/photo", component: PhotoPage}
    ]
})

