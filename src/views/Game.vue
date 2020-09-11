<template>
  <div class="flex flex-col space-y-4">
    <h1 class="text-3xl">Game</h1>
    <div>
      <h2 class="text-xl">
        {{
          !isSorting
            ? `เลือกปัญหาที่อยากได้รับหารแก้ไขทั้งหมด 5 อันดับ (เหลืออีก ${numberOfSelectableTopic})`
            : "เรียงลำดับตามความสำคัญ"
        }}
      </h2>
    </div>
    <draggable
      tag="div"
      class="grid grid-cols-5 gap-4"
      v-model="topics"
      :animation="200"
      ghostClass="opacity-0"
      :disabled="!isSorting"
    >
      <TopicCard
        v-for="(topic, index) in displayTopics"
        :key="topic.key"
        :topic="topic"
        :onClick="() => selectOption(index)"
        ฃ
        :isSorting="isSorting"
      />
    </draggable>

    <div class="text-right space-x-2">
      <button
        v-if="isSorting"
        class="rounded bg-gray-300 px-4 py-2"
        @click="isSorting = false"
      >
        Back
      </button>
      <button
        :class="
          `rounded bg-gray-300 px-4 py-2 ${
            numberOfSelectableTopic !== 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`
        "
        @click="isSorting = true"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TopicCard from "../components/game/TopicCard";

const MAX_SELECTED_TOPICS = 5;
const topics = [
  { key: "transportation", name: "การคมนาคม" },
  { key: "environment", name: "สิ่งแวดล้อม" },
  { key: "public_space", name: "พื้นที่สาธารณะ" },
  { key: "safety", name: "ความปลอดภัย" },
  { key: "flood", name: "น้ำท่วม" },
  { key: "inequality", name: "ค่าครองชีพและความเลื่อมล้ำ" },
  { key: "education", name: "การศึกษา" },
  { key: "health", name: "ระบบสาธารณะสุข" },
  { key: "governance", name: "ระบบบริหารราชการ" }
];

export default {
  name: "Game",
  components: {
    draggable,
    TopicCard
  },
  data() {
    return {
      topics: topics.map(topic => ({ ...topic, isSelected: false })),
      isSorting: false
    };
  },
  computed: {
    selectedTopics() {
      return this.topics.filter(({ isSelected }) => isSelected);
    },
    displayTopics() {
      return this.isSorting ? this.selectedTopics : this.topics;
    },
    numberOfSelectableTopic() {
      return MAX_SELECTED_TOPICS - this.selectedTopics.length;
    }
  },
  methods: {
    selectOption(index) {
      if (this.isSorting) {
        return;
      }

      const isSelected = !this.topics[index].isSelected;

      if (!isSelected || this.numberOfSelectableTopic > 0) {
        this.$set(this.topics, index, {
          ...this.topics[index],
          isSelected
        });
      }
    }
  }
};
</script>
