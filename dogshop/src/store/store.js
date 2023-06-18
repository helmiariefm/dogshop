import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        dogs: []
    },
    mutations: {
        SET_DOGS(state, dogs){
            state.dogs = dogs
        }
    },
    actions: {
        async fetchDogBreed({commit}){
            try {
                const res = await axios.get('https://dog.ceo/api/breeds/list/all')
                const dogs =  res.data.message
                commit('SET_DOGS', dogs)
            } catch (err) {
                console.error(err)
            }
        }
    }
})