<template>
  <Layout
    color="#FECC2F"
    page="Bangkok in your dream"
    title="สร้างเมืองในฝัน"
    subtitle="จินตนาการว่าตัวเองเป็นผู้ว่ากรุงเทพฯ แล้วลองเลือกพัฒนาเมืองตามประเด็นที่คุณสนใจ แล้วลองมาดูกันว่า เมืองในฝันของคุณ กับเมืองในฝันของทุกคน ใกล้เคียงกันหรือไม่?"
  >
    <div class="flex flex-row">
      <div class="flex flex-col space-y-12">
        <h1 class="text-3xl font-bold text-center">
          เปรียบเทียบ กรุงเทพในฝันของคุณ และกรุงเทพของทุกๆ คน
        </h1>
        <div class="flex flex-row space-x-8">
          <div class="flex-1 flex flex-col space-y-8">
            <div>
              <h2 class="text-xl font-bold">กรุงเทพฯ ในฝันของคุณ</h2>
            </div>
            <div class="space-y-8">
              <Motto :topics="game" />
              <EmojiMap :topics="game" :fontSizeMultiplier="1" />
            </div>
            <div class="flex-1 flex flex-col space-y-8">
              <div class="grid grid-cols-1 gap-2">
                <TopicCard
                  v-for="topic in game"
                  :key="topic.key"
                  :topic="topic"
                  :onClick="() => null"
                />
              </div>
            </div>
          </div>
          <div class="bg-gray-300" style="width: 1px;"></div>
          <div class="flex-1 flex flex-col space-y-8">
            <div>
              <h2 class="text-xl font-bold">กรุงเทพในฝันของทุกๆ คน</h2>
            </div>
            <div class="space-y-8">
              <Motto :topics="mockedPublicData" />
              <EmojiMap :topics="mockedPublicData" :fontSizeMultiplier="1" />
            </div>
            <div class="flex-1 flex flex-col space-y-8">
              <div class="grid grid-cols-1 gap-2">
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
        <div class="text-center">
          <router-link
            to="/construction"
            class="block rounded bg-gray-300 px-4 py-2 w-64 m-auto"
          >
            แบ่งปัน
          </router-link>
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
