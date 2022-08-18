<template>
  <div>
    <carousel />
    <div class="row" style="height: 350px; padding-left: 18px">
      <q-card class="col-6">
        <q-card-section>
          <div class="text-h6 text-center">Flash News</div>
        </q-card-section>
        <marquee
          width="100%"
          direction="up"
          height="80%"
          onmouseover="this.stop();"
          onmouseout="this.start();"
        >
          <label v-for="flash in flashNews" :key="flash.id">
            <div v-if="flash.type == 'text'">
              {{ flash.message }}
            </div>
            <div v-else>
              <a :href="flash.link" target="blank"> {{ flash.message }}</a>
            </div>
            <br />
          </label>
        </marquee>
      </q-card>
    </div>
    <faculty />
  </div>
</template>

<script>
import Carousel from "src/components/main/Carousel.vue";
import Faculty from "src/components/main/Faculty.vue";
export default {
  components: {
    Carousel,
    Faculty,
  },
  data() {
    return {
      flashNews: [
        {
          message:
            "This is a sample scrolling text that has scrolls in the upper direction.",
          type: "text",
        },
        {
          message:
            "This is a sample scrolling text that has scrolls in the upper direction.",
          type: "anchor",
          link: "https://www.google.com",
        },
        {
          message:
            "This is a sample scrolling text that has scrolls in the upper direction.",
          type: "text",
        },
      ],
    };
  },
  async created() {
    const res = await this.$axios.get("/flashNews");
    this.flashNews = res.data;
  },
};
</script>
<style></style>
