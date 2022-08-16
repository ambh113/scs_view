<template>
  <div>
    <carousel/>
    <div class="row" style="height:350px; padding-left: 18px;">
<q-card class="col-6">
  <q-card-section>
        <div class="text-h6 text-center">Flash News</div>
      </q-card-section>
      <marquee width="100%" direction="up" height="80%">
      This is a sample scrolling text that has scrolls in the upper direction.
      </marquee>
    </q-card>
    </div>
    <faculty/>
  </div>
</template>

<script>
import Carousel from "src/components/main/Carousel.vue"
import Faculty from "src/components/main/Faculty.vue"
export default {
  components: {
    Carousel,Faculty
  },
}
</script>
<style>

</style>