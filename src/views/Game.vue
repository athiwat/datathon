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
    <div v-if="isSorting">
      <EmojiMap :topics="selectedTopics" :fontSizeMultiplier="3" />
    </div>
    <draggable
      tag="div"
      class="grid grid-cols-5 gap-4"
      v-model="selectedTopics"
      :animation="200"
      ghostClass="opacity-0"
      :disabled="!isSorting"
    >
      <TopicCard
        v-for="(topic, index) in displayTopics"
        :key="topic.key"
        :topic="topic"
        :onClick="() => selectOption(index)"
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
        @click="next()"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TopicCard from "../components/game/TopicCard";
import EmojiMap from "../components/game/EmojiMap";
import { mapMutations } from "vuex";
import { COLLECTION } from "../storage/collection";

const MAX_SELECTED_TOPICS = 5;
const topics = [
  { key: "transportation", name: "การคมนาคม", emoji: "🚙" },
  { key: "environment", name: "สิ่งแวดล้อม", emoji: "🌲" },
  { key: "public_space", name: "พื้นที่สาธารณะ", emoji: "🚶‍♂️" },
  { key: "safety", name: "ความปลอดภัย", emoji: "🦺" },
  { key: "flood", name: "น้ำท่วม", emoji: "🌊" },
  { key: "inequality", name: "ค่าครองชีพและความเลื่อมล้ำ", emoji: "💸" },
  { key: "education", name: "การศึกษา", emoji: "📖" },
  { key: "health", name: "ระบบสาธารณะสุข", emoji: "💊" },
  { key: "governance", name: "ระบบบริหารราชการ", emoji: "📇" }
];

export default {
  name: "Game",
  components: {
    draggable,
    TopicCard,
    EmojiMap
  },
  data() {
    return {
      topics: topics.map(topic => ({ ...topic, isSelected: false })),
      selectedTopics: [],
      isSorting: false
    };
  },
  computed: {
    displayTopics() {
      return this.isSorting ? this.selectedTopics : this.topics;
    },
    numberOfSelectableTopic() {
      return (
        MAX_SELECTED_TOPICS -
        this.topics.filter(({ isSelected }) => isSelected).length
      );
    }
  },
  methods: {
    ...mapMutations(["saveToStore"]),
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
    },
    next() {
      if (!this.isSorting) {
        this.selectedTopics = this.topics.filter(
          ({ isSelected }) => isSelected
        );
        this.isSorting = true;
      } else {
        this.saveToStore({
          collection: COLLECTION.Game,
          data: this.selectedTopics
        });

        this.$router.push("/game-result");
      }
    }
  }
};
</script>
