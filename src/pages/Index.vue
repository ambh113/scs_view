<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <q-btn color="brown-5" label="Brown 5" /> -->
    <candidate />
  </q-page>
</template>

<script>
import Candidate from "./Candidate.vue";
export default {
  components: { Candidate },
  name: "PageIndex",
};
</script>
