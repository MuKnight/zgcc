import axios from 'axios'

export const state = () => ({
    authUser: null
})

export const mutations = {
    SET_USER(state, user) {
        state.authUser = user
    }
}

