<template>
  <div>
    <h1 class="text-5xl">Game result</h1>
    <div class="flex flex-row space-x-10">
      <div class="flex flex-col flex-1">
        <h1 class="text-3xl">You</h1>
        <div>
          <Motto :topics="game" />
          <EmojiMap :topics="game" :fontSizeMultiplier="1.5" />
        </div>
        <div class="grid grid-cols-5 gap-4">
          <TopicCard
            v-for="topic in game"
            :key="topic.name"
            :topic="topic"
            :onClick="() => null"
          />
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <h1 class="text-3xl">Other people</h1>
        <div>
          <Motto :topics="mockedPublicData" />
          <EmojiMap :topics="mockedPublicData" :fontSizeMultiplier="1.5" />
        </div>
        <div class="grid grid-cols-5 gap-4">
          <TopicCard
            v-for="topic in mockedPublicData"
            :key="topic.key"
            :topic="topic"
            :onClick="() => null"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import EmojiMap from "../components/game/EmojiMap";
import TopicCard from "../components/game/TopicCard";
import Motto from "../components/game/Motto";
import { COLLECTION } from "../storage/collection";

export default {
  name: "GameResult",
  components: {
    EmojiMap,
    TopicCard,
    Motto
  },
  data() {
    return {
      mockedPublicData: [
        { name: "ปัญหาน้ำท่วม", emoji: "📖", motto: "ระบายน้ำไว" },
        {
          name: "ปัญหารถติด",
          emoji: "📇",
          motto: "ขับขี่แคล่วคล่อง"
        },
        {
          name: "พัฒนาการศึกษา",
          emoji: "🌊",
          motto: "ให้คุณค่ากับนักเรียน"
        },
        {
          name: "พื้นที่สีเขียว",
          emoji: "📖",
          motto: "ต้นไม้ใหญ่น้อย"
        },
        {
          name: "ระบบขนส่งสาธารณะ",
          emoji: "💊",
          motto: "เดินทางแสนสะดวก"
        }
      ]
    };
  },
  computed: {
    ...mapState([COLLECTION.Game])
  }
};
</script>
