<template>
  <div>
    <h1 class="text-5xl">Game result</h1>
    <div class="flex flex-row space-x-10">
      <div class="flex flex-col flex-1">
        <h1 class="text-3xl">You</h1>
        <div>
          <EmojiMap :topics="game" :fontSizeMultiplier="1.5" />
        </div>
        <div class="grid grid-cols-5 gap-4">
          <TopicCard
            v-for="topic in game"
            :key="topic.key"
            :topic="topic"
            :onClick="() => null"
          />
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <h1 class="text-3xl">Other people</h1>
        <div>
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
import { COLLECTION } from "../storage/collection";

export default {
  name: "GameResult",
  components: {
    EmojiMap,
    TopicCard
  },
  data() {
    return {
      mockedPublicData: [
        { key: "transportation", name: "การคมนาคม", emoji: "🚙" },
        { key: "environment", name: "สิ่งแวดล้อม", emoji: "🌲" },
        { key: "public_space", name: "พื้นที่สาธารณะ", emoji: "🚶‍♂️" },
        { key: "safety", name: "ความปลอดภัย", emoji: "🦺" },
        { key: "flood", name: "น้ำท่วม", emoji: "🌊" }
      ]
    };
  },
  computed: {
    ...mapState([COLLECTION.Game])
  }
};
</script>
