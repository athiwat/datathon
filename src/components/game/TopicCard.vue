<template>
  <div
    :class="
      `px-4 py-2 text-center rounded shadow border-2 flex justify-center cursor-pointer ${
        topic.isSelected ? 'border-green-400' : ''
      } ${isSorting ? 'cursor-pointer' : ''}`
    "
    @click="onClick"
  >
    <div class="m-auto">{{ topic.name }}</div>
  </div>
</template>

<script>
export default {
  name: "TopicCard",
  props: ["topic", "onClick", "isSorting"]
};
</script>
