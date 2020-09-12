<template>
  <div class="flex mb-4">
    <div class="w-3/4">
      Explore
      <button v-if="isHidden" @click="isHidden = false">reveal</button>
    </div>
    <div class="w-1/4">
      <h1 v-if="!isHidden">Show</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true
    };
  }
};
</script>
