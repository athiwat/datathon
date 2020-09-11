<template>
  <div>
    <h1 class="text-3xl">Game</h1>

    <draggable
      tag="div"
      class="grid grid-cols-3 gap-4"
      v-model="topics"
      :animation="200"
      ghostClass="opacity-0"
    >
      <div
        class="p-5 text-center rounded shadow"
        v-for="topic in topics"
        :key="topic.name"
      >
        {{ topic.name }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Game",
  components: {
    draggable
  },
  data() {
    return {
      topics: [
        { name: "การคมนาคม" },
        { name: "สิ่งแวดล้อม" },
        { name: "พื้นที่สาธารณะ" }
      ]
    };
  }
};
</script>
