import axios from "axios";

export default {
    state: {
        photos: [],
        test: "",
        input: ""
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
    actions: {
        fetchPhotos(context) {
            axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
                .then(response => context.commit("setPhoto", response.data))
                .catch(error => console.log(error));
        }
    }
}