import axios from "axios";

export default {
    state: {
        photos: [],
        test: 1
    },
    mutations: {
        setTest(state, payload) {
            state.test +=payload
        },
        setPhoto(state, payload) {
            state.photos = payload
        }

    },
    getters: {
        getAllPhotos(state) {
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