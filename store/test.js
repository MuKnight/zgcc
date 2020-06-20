
export const state = () => ({
    num: 1
})

export const mutations = {
    add(state) {
        state.num++
    },
    reduce(state) {
        state.num--
    }
}
export const actions = {
    addnum({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 200)
        })
    }
}
