const state = {
  years: {
    first: 1868,
    last: 1940
  },
  layers: [],
  boxGeocoding: true,
  boxInfos: false
}

const mutations = {
  setYears (state, years) {
    state.years.first = years.first
    state.years.last = years.last
  },
  setBoxGeocoding (state, value) {
    state.boxGeocoding = value
  },
  setBoxInfos (state, value) {
    state.boxInfos = value
  },
  setLayers (state, value) {
    state.layers = value
  },
}

const actions = {
  setYears ({commit}, years) {
    commit('setYears', years)
  },
  setBoxGeocoding({commit}, value) {
    commit('setBoxGeocoding', value)
  },
  setBoxInfos({commit}, value) {
    commit('setBoxInfos', value)
  },
  setLayers({commit}, value) {
    commit('setLayers', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
