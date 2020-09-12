<template>
  <div class="text-center w-full">
    <p>คำขวัญ</p>
    <p class="text-2xl">"{{ motto }}"</p>
  </div>
</template>

<script>
export default {
  name: "Motto",
  props: ["topics"],
  computed: {
    motto() {
      return this.topics.map(({ motto }) => motto).join(" ");
    }
  }
};
</script>
