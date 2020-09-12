<template>
  <div id="home" class="w-screen h-screen flex">
    <div class="m-auto text-center pb-24">
      <h1 class="font-bold" style="font-size: 15vh">
        กรุงเทพ
        <br />ในฝัน
      </h1>
      <h2 class="text-2xl">ตรวจสอบ-เข้าใจ-ออกความเห็น ไปด้วยกัน</h2>
      <div class="mt-12">
        <router-link
          to="/quiz"
          class="rounded-full px-6 py-2 text-2xl"
          style="background-color:#FECC2F; box-shadow: 0px 4px 10px #FECC2F;"
          >เริ่มเล่น</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {}
};
</script>

<style lang="css" scoped>
#home {
  background: url(../assets/bg.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
