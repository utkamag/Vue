import axios from "axios";

export default {
    state: {
        photos: []
    },
    mutations: {
        setPhoto(state, payload) {
            state.photos = payload
        }
    },
    getters: {
        getAllPhoto(state) {
            return state.photos
        }
    },
    action: {
        fetchPhotos(context) {
            axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
                .then(response => context.commit("setPhoto", response.data))
                .catch(error => console.log(error));
        }
    }
}