<template>
  <div
    :class="
      `p-5 text-center rounded shadow border-2 ${
        !isSorting && topic.isSelected ? 'border-green-400' : ''
      } ${isSorting ? 'cursor-move' : 'cursor-pointer'}`
    "
    @click="onClick"
  >
    {{ topic.name }}
  </div>
</template>

<script>
export default {
  name: "TopicCard",
  props: ["topic", "onClick", "isSorting"]
};
</script>
