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
      <Motto :topics="selectedTopics" />
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
        :key="topic.name"
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
import { mapMutations } from "vuex";

import TopicCard from "../components/game/TopicCard";
import EmojiMap from "../components/game/EmojiMap";
import Motto from "../components/game/Motto";
import { COLLECTION } from "../storage/collection";

const MAX_SELECTED_TOPICS = 5;
const topics = [
  {
    name: "ก่อสร้างอาคารและถนน",
    emoji: "🏗",
    motto: "ตึกรามงามตา"
  },
  {
    name: "กีฬาและวัฒนธรรม",
    emoji: "🚣‍♂️",
    motto: "กีฬาดี ดนตรีเด่น"
  },
  {
    name: "ความปลอดภัย ไฟส่องสว่าง & CCTV",
    emoji: "💡",
    motto: "ปลอดภัยทุกพื้นที่"
  },
  {
    name: "ด้านการแพทย์และสาธารณสุข",
    emoji: "🏥",
    motto: "สุขภาพดีถ้วนหน้า"
  },
  {
    name: "ทางเท้า หาบเร่ แผงลอย",
    emoji: "🚶‍♂️",
    motto: "ของดีริมถนน"
  },
  {
    name: "ปรับปรุงภูมิทัศน์",
    emoji: "🎡",
    motto: "สวยงามสะอาดตา"
  },
  { name: "ปัญหาน้ำท่วม", emoji: "🌊", motto: "ระบายน้ำไว" },
  {
    name: "ปัญหามลพิษ เช่น ขยะ น้ำเสีย อากาศเสีย",
    emoji: "🗑",
    motto: "บ้านเมืองสะอาด"
  },
  {
    name: "ปัญหารถติด",
    emoji: "🚘",
    motto: "ขับขี่แคล่วคล่อง"
  },
  { name: "พัฒนาการชุมชน", emoji: "🏡", motto: "ยกระดับชุมชน" },
  {
    name: "พัฒนาการศึกษา",
    emoji: "🎓",
    motto: "ให้คุณค่ากับนักเรียน"
  },
  {
    name: "พัฒนาผังเมือง",
    emoji: "🗺",
    motto: "จัดระเบียบบ้านเมือง"
  },
  {
    name: "พื้นที่สีเขียว",
    emoji: "🌲",
    motto: "ต้นไม้ใหญ่น้อย"
  },
  {
    name: "ระบบขนส่งสาธารณะ",
    emoji: "🚍",
    motto: "เดินทางแสนสะดวก"
  },
  {
    name: "ห้องสมุดและพื้นที่สาธารณะ",
    emoji: "📚",
    motto: "พื้นที่แห่งการเรียนรู้"
  }
];

export default {
  name: "Game",
  components: {
    draggable,
    TopicCard,
    EmojiMap,
    Motto
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
