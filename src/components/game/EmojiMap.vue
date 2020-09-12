<template>
  <div class="flex flex-row m-auto justify-center">
    <div
      v-for="(emoji, index) in emojis"
      :key="index"
      class="flex flex-col justify-end leading-none px-2"
      :style="`fontSize: ${(emojis.length - index) * FONT_SIZE_MULTIPLIER}vw;`"
    >
      {{ emoji }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EmojiMap",
  props: ["emojis"],
  data() {
    return {
      FONT_SIZE_MULTIPLIER: 3
    };
  }
};
</script>
