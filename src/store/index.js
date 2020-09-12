import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { v4 as uuidv4 } from "uuid";

import { COLLECTION } from "./collection";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: uuidv4(),
    [COLLECTION.Quiz]: {},
    [COLLECTION.Game]: {}
  },
  mutations: {
    saveToStore(state, { collection, data }) {
      Vue.set(state, collection, data);
    }
  },
  plugins: [createPersistedState()]
});
