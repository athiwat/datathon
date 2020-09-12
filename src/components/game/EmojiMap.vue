<template>
  <div class="relative">
    <div class="flex flex-row absolute inset-0 pb-24">
      <div class="flex flex-row justify-center m-auto">
        <div
          v-for="(emoji, index) in emojis"
          :key="index"
          class="flex flex-col justify-end leading-none px-2"
          :style="
            `fontSize: ${(emojis.length - index) * fontSizeMultiplier}vw;`
          "
        >
          {{ emoji }}
        </div>
      </div>
    </div>
    <BangkokMap />
  </div>
</template>

<script>
import BangkokMap from "./BangkokMap";

export default {
  name: "EmojiMap",
  props: ["topics", "fontSizeMultiplier"],
  components: {
    BangkokMap
  },
  computed: {
    emojis() {
      return this.topics.map(({ emoji }) => emoji);
    }
  }
};
</script>
