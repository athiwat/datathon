import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { v4 as uuidv4 } from "uuid";

import { COLLECTION } from "./collection";
// import { db, serverTimestamp } from "./firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [COLLECTION.User]: {
      userId: uuidv4()
    },
    [COLLECTION.Quiz]: {},
    [COLLECTION.Game]: {}
  },
  mutations: {
    saveToStore(state, { collection, data }) {
      Vue.set(state, collection, data);
    }
  },
  // actions: {
  //   saveCollectionToFirebase({ state }, { collection }) {
  //     // return db
  //     //   .collection(collection)
  //     //   .doc(state[COLLECTION.User].userId)
  //     //   .set({
  //     //     ...state[collection],
  //     //     timestamp: serverTimestamp()
  //     //   });
  //   }
  // },
  plugins: [createPersistedState()]
});
