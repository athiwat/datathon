<template>
  <Layout
    color="#FECC2F"
    page="Bangkok in your dream"
    title="สร้างเมืองในฝัน"
    subtitle="จินตนาการว่าตัวเองเป็นผู้ว่ากรุงเทพฯ แล้วลองเลือกพัฒนาเมืองตามประเด็นที่คุณสนใจ แล้วลองมาดูกันว่า เมืองในฝันของคุณ กับเมืองในฝันของทุกคน ใกล้เคียงกันหรือไม่?"
  >
    <div class="flex flex-col space-y-8">
      <div class="text-center">
        <h2 class="font-bold text-3xl">
          {{
            isSelecting
              ? "เลือก 5 ประเด็นที่คุณคิดว่า คนกรุงเทพฯ ควรได้รับการแก้ไขหรือพัฒนาให้ดีขึ้น"
              : isSorting
              ? "ต่อไป เรียงลำดับประเด็นความสำคัญจากมุมมองของคุณ"
              : "และนี่... คือกรุงเทพในฝันของคุณ"
          }}
        </h2>
        <p class="text-gray-500" v-if="!isReviewing">
          {{
            !isSorting
              ? `ต้องเลือกอีก ${numberOfSelectableTopic} ประเด็น`
              : "ลากซ้าย-ขวาเพื่อเรียงลำดับ"
          }}
        </p>
      </div>
      <draggable
        tag="div"
        class="grid grid-cols-5 gap-4 my-8"
        v-model="selectedTopics"
        v-if="!isReviewing"
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

      <div class="flex flex-row" v-if="isSorting">
        <div class="flex-1">&lt; สำคัญมากที่สุด</div>
        <div>สำคัญน้อยที่สุด &gt;</div>
      </div>

      <div v-if="isReviewing" class="space-y-8 mb-12">
        <Motto :topics="selectedTopics" />
        <EmojiMap :topics="selectedTopics" :fontSizeMultiplier="2" />
      </div>

      <div v-if="isReviewing" class="text-center">
        <ul>
          <li class="font-bold">
            เมืองกรุงเทพที่คุณอยากเห็น คือเมืองที่ให้ความสำคัญในเรื่อง
          </li>
          <li v-for="topic in selectedTopics" :key="topic.name">
            {{ topic.name }}
          </li>
        </ul>
      </div>

      <div class="text-right space-x-2">
        <button
          v-if="isSorting"
          class="rounded bg-gray-300 px-4 py-2"
          @click="isSorting = false"
        >
          ย้อนกลับ
        </button>
        <button
          :class="
            `rounded bg-gray-300 px-4 py-2 ${
              numberOfSelectableTopic !== 0
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`
          "
          @click="next()"
        >
          ถัดไป
        </button>
      </div>
    </div>
  </Layout>
</template>

<script>
import draggable from "vuedraggable";
import { mapMutations } from "vuex";

import Layout from "../layouts/default";
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
    Motto,
    Layout
  },
  data() {
    return {
      topics: topics.map(topic => ({ ...topic, isSelected: false })),
      selectedTopics: [],
      state: 0
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
    },
    isSelecting() {
      return this.state === 0;
    },
    isSorting() {
      return this.state === 1;
    },
    isReviewing() {
      return this.state === 2;
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
      if (this.isSelecting) {
        this.selectedTopics = this.topics.filter(
          ({ isSelected }) => isSelected
        );
        this.state++;
      } else if (this.isSorting) {
        this.state++;
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
