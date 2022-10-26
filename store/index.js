export const state = () => ({
  stages: [],
  pages: [],
  skills: [],
  portfolio: []
  // parcours: []
})

export const getters = {
  getStages (state) {
    return state.stages
  },
  getPages (state) {
    return state.pages
  },
  getSkills (state) {
    return state.skills
  },
  getPortfolio (state) {
    return state.portfolio
  }
  // getParcours (state) {
  //   return state.parcours
  // }
}

export const mutations = {
  SET_STAGES (state, stages) {
    state.stages = stages
  },
  SET_PAGES (state, pages) {
    state.pages = pages
  },
  SET_SKILLS (state, skills) {
    state.skills = skills
  },
  SET_PORTFOLIO (state, portfolio) {
    state.portfolio = portfolio
  }
  // SET_PARCOURS (state, parcours) {
  //   state.parcours = parcours
  // }
}

export const actions = {
  async nuxtServerInit ({ dispatch }, { $axios }) {
    const stages = await $axios.$get('https://5xe4ems3.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "stages"]{name,"imageId":image{asset,alt}, link, year, location,theme}')

    const pages = await $axios.$get('https://5xe4ems3.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset,alt},titre,text}')

    const skills = await $axios.$get('https://5xe4ems3.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "skills"]{name,"imageUrl": image{asset,alt}}')

    const portfolio = await $axios.$get('https://5xe4ems3.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "portfolio"]{name,"imageUrl":image{asset,alt},slug{current},difficulty,text,link}')

    // const parcours = await $axios.$get('https://5xe4ems3.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "parcours"]{name,speciality,year,location,status}')

    await dispatch('setStages', stages.result)
    await dispatch('setPages', pages.result)
    await dispatch('setSkills', skills.result)
    await dispatch('setPortfolio', portfolio.result)
    // await dispatch('setParcours', parcours.result)
  },
  setStages ({ commit }, stages) {
    commit('SET_STAGES', stages)
  },
  setPages ({ commit }, pages) {
    commit('SET_PAGES', pages)
  },
  setSkills ({ commit }, skills) {
    commit('SET_SKILLS', skills)
  },
  setPortfolio ({ commit }, portfolio) {
    commit('SET_PORTFOLIO', portfolio)
  }
  // setParcours ({ commit }, parcours) {
  //   commit('SET_PARCOURS', parcours)
  // }
}
