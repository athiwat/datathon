<template>
  <div class="text-center w-full space-y-2">
    <p class="text-gray-600">คำขวัญ</p>
    <p class="text-2xl">"กรุงเทพฯ {{ motto }}"</p>
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
