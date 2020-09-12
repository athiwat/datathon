<template>
  <Layout
    color="#FECC2F"
    page="Bangkok in your dream"
    title="สร้างเมืองในฝัน"
    subtitle="จินตนาการว่าตัวเองเป็นผู้ว่ากรุงเทพฯ แล้วลองเลือกพัฒนาเมืองตามประเด็นที่คุณสนใจ"
  >
    <div class="flex flex-row">
      <div class="flex flex-col space-y-24">
        <div class="flex flex-col space-y-8">
          <h1 class="text-3xl">เมืองที่ทุกคนร่วมสร้าง</h1>
          <div class="space-y-8">
            <Motto :topics="mockedPublicData" />
            <EmojiMap :topics="mockedPublicData" :fontSizeMultiplier="2" />
          </div>
          <div class="grid grid-cols-5 gap-4">
            <TopicCard
              v-for="topic in mockedPublicData"
              :key="topic.name"
              :topic="topic"
              :onClick="() => null"
            />
          </div>
        </div>
        <div class="flex flex-col flex-1 space-y-8">
          <h1 class="text-3xl">กรุงเทพฯ ของคุณ</h1>
          <Motto :topics="game" />
          <div class="flex flex-row space-x-16">
            <div class="flex-1">
              <EmojiMap :topics="game" :fontSizeMultiplier="1" />
            </div>
            <div class="flex-1 flex flex-col space-y-8">
              <div class="grid grid-cols-3 gap-2">
                <TopicCard
                  v-for="topic in game"
                  :key="topic.key"
                  :topic="topic"
                  :onClick="() => null"
                />
              </div>
              <div class="text-center">
                <button class="rounded bg-gray-300 px-4 py-2 w-full">
                  แบ่งปัน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";

import Layout from "../layouts/default";
import EmojiMap from "../components/game/EmojiMap";
import TopicCard from "../components/game/TopicCard";
import Motto from "../components/game/Motto";
import { COLLECTION } from "../storage/collection";

export default {
  name: "GameResult",
  components: {
    EmojiMap,
    TopicCard,
    Motto,
    Layout
  },
  data() {
    return {
      mockedPublicData: [
        { name: "ปัญหาน้ำท่วม", emoji: "🌊", motto: "ระบายน้ำไว" },
        {
          name: "ปัญหารถติด",
          emoji: "🚘",
          motto: "ขับขี่แคล่วคล่อง"
        },
        {
          name: "พัฒนาการศึกษา",
          emoji: "🎓",
          motto: "ให้คุณค่ากับนักเรียน"
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
        }
      ]
    };
  },
  computed: {
    ...mapState([COLLECTION.Game])
  }
};
</script>
