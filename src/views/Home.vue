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
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
