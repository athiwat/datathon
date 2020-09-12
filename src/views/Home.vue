<template>
  <div>
    <h1 class="text-3xl">Datathon Landing page</h1>
    <div />
    <router-link to="/quiz">Quiz</router-link>
    <div />
    <router-link to="/game">Game</router-link>
    <div />
    <router-link to="/explore">Explore</router-link>
    <div />

    <router-link to="/yourvoice">Your voice</router-link>
    
    <button class="rounded px-4 py-2 bg-blue-600 text-white" @click="start">
      Start (init user id)
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { COLLECTION } from "../storage/collection";

export default {
  name: "Home",
  methods: {
    ...mapActions(["saveCollectionToFirebase"]),
    start() {
      this.saveCollectionToFirebase({
        collection: COLLECTION.User
      });
      // go to next page
    }
  }
};
</script>
