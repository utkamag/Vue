import {createStore} from 'vuex'
import PhotoModule from "@/store/PhotoModule";


export default createStore({
    modules: {
        module1: PhotoModule
    }
})
