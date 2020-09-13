<template>
  <Layout
    color="#EC4E41"
    page="Quiz"
    title="แน่ใจหรอ ว่าคุณรู้จักกรุงเทพจริง"
    subtitle="ตอบคำถามสนุก ๆ 5 ข้อเกี่ยวกับกรุงเทพ แล้วลองดูซิว่าคุณรู้จักกรุงเทพมากแค่ไหน"
  >
    <div>
      <iframe
        src="https://flo.uri.sh/visualisation/3720265/embed"
        frameborder="0"
        scrolling="no"
        style="width:100%;height:1000px;"
        aria-label
      ></iframe>
      <div
        style="width:100%!;margin-top:4px!important;text-align:right!important;"
      >
        <a
          class="flourish-credit"
          href="https://public.flourish.studio/visualisation/3720265/?utm_source=embed&utm_campaign=visualisation/3720265"
          target="_top"
          style="text-decoration:none!important"
        >
          <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"
          />
        </a>
      </div>
      <div class="text-right mt-8">
        <router-link to="explore" class="rounded bg-gray-300 px-4 py-2"
          >ถัดไป</router-link
        >
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../layouts/default";
export default {
  components: {
    Layout
  }
};
</script>
