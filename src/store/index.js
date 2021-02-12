import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    packageInfo: null
  },
  getters:{
  },
  mutations: {
    SET_PACKAGES: (state, payload) => {
      state.packages = []
      payload.objects.forEach(item =>{
        state.packages.push(item.package)
      })

    }
  },
  actions: {
    SEARCH_PACKAGES:  async (context, names) => {
      let {data} = await Axios.get(`-/v1/search?text=${names}&size=250`);
      context.commit('SET_PACKAGES', data);
    },
  }
})
