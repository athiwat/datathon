<template>
  <div class="w-screen min-h-screen" :style="containerStyle">
    <div class="flex flex-col max-w-screen-lg m-auto py-12 space-y-12">
      <div class="flex flex-col space-y-4 text-center">
        <div class="flex flex-row">
          <div class="flex-1">
            <router-link to="quiz">Quiz</router-link>
          </div>
          <div class="flex-1">
            <router-link to="explore">Explore</router-link>
          </div>
          <div class="flex-1">
            <router-link to="game">Bangkok in your dream</router-link>
          </div>
          <div class="flex-1">
            <router-link to="yourvoice">Your voice</router-link>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="flex-1 flex flex-row">
            <div class="flex-1 m-auto"></div>
            <div class="w-4 h-4 rounded-full bg-white m-auto"></div>
            <div class="bg-black flex-1 m-auto" style="height: 1px;"></div>
          </div>
          <div class="flex-1 flex flex-row">
            <div class="bg-black flex-1 m-auto" style="height: 1px;"></div>
            <div class="w-4 h-4 rounded-full bg-white m-auto"></div>
            <div class="bg-black flex-1 m-auto" style="height: 1px;"></div>
          </div>
          <div class="flex-1 flex flex-row">
            <div class="bg-black flex-1 m-auto" style="height: 1px;"></div>
            <div class="w-4 h-4 rounded-full bg-white m-auto"></div>
            <div class="bg-black flex-1 m-auto" style="height: 1px;"></div>
          </div>
          <div class="flex-1 flex flex-row">
            <div class="bg-black flex-1 m-auto" style="height: 1px;"></div>
            <div class="w-4 h-4 rounded-full bg-white m-auto"></div>
            <div class="flex-1 m-auto"></div>
          </div>
        </div>
      </div>
      <div class="space-y-2 text-center">
        <h2 class="font-bold">{{ page }}</h2>
        <h1 class="text-5xl font-bold">{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
      <div class="shadow-xl bg-white p-10" style="border-radius: 50px;">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: ["color", "page", "title", "subtitle"],
  computed: {
    containerStyle() {
      return `background: linear-gradient(180deg, ${this.color} 0%, rgba(255, 255, 255, 0) 100%);`;
    }
  }
};
</script>
