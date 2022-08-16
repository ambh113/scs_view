<template>
  <div class="row">
    <q-list class="q-px-md q-gutter-y-md col-md-2">
      <q-item
        v-for="(menuItem, index) in menuList"
        :key="index"
        v-ripple
        clickable
        class="hr-item-rounded-pressed"
        :to="menuItem.link"
      >
        <q-item-section avatar>
          <q-icon :name="menuItem.icon" />
        </q-item-section>
        <q-item-section>
          {{ menuItem.label }}
        </q-item-section>
        <q-separator v-if="menuItem.separator" color="black" />
      </q-item>
    </q-list>
    <div class="col-md-10">
      <router-view :header-height="headerHeight" style="min-height: unset" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerHeight: "",
      tab: "mails",
      splitterModel: 20,
      menuList: [
        {
          icon: "dashboard",
          label: "Personal details",
          separator: false,
          link: "/profile/personalDetails",
        },
        {
          icon: "supervisor_account",
          label: "About",
          separator: false,
          link: "/profile/about",
        },
      ],
    };
  },
};
</script>

<style></style>
