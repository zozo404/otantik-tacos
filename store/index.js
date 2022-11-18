export const state = () => ({
  pages: []
})

export const getters = {
  getPages (state) {
    return state.pages
  }
}

export const mutations = {
  SET_PAGES (state, pages) {
    state.pages = pages
  }
}

// permet de faire les requetes vers la bdd (SANITY) en selectionnant le nom (_type) et les champs demandés (exp: name,titre...)
export const actions = {
  async nuxtServerInit ({ dispatch }, { $axios }) {
    const pages = await $axios.$get('https://ygecrkdj.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset,alt},titre,text}')

    await dispatch('setPages', pages.result)
  },
  setPages ({ commit }, pages) {
    commit('SET_PAGES', pages)
  }
}
