<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-primary">
      <div class="row">
        <img
          src="~assets/img/logo.png"
          id="target-img-1"
          style="height: 100px;"
        />
      
      <div class="banner">
                <line1 id="line1">Central University of Karnataka | कर्नाटक केंद्रीय विश्‍वविद्यालय | ಕರ್ನಾಟಕ ಕೇಂದ್ರೀಯ ವಿಶ್ವವಿದ್ಯಾಲಯ</line1><br>
                <line2 id="line2"><i>(Eshtablished by an Act of Parliament in 2009)</i></line2><br>
                <line3 id="line3">School of Computer Science</line3>

            </div>
        </div>
      <q-toolbar class="justify-end">
        <q-btn
          v-if="!isLoggedIn"
          label="Sign in"
          color="primary"
          @click="signIn = true"
        />
        <q-btn
          v-if="!isLoggedIn"
          label="Register"
          color="primary"
          @click="register = true"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-dialog v-model="signIn">
      <login />
    </q-dialog>
    <q-dialog v-model="register">
      <register />
    </q-dialog>
  </q-layout>
</template>

<script>
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default {
  name: "MainLayout",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      isLoggedIn: false,
      register: false,
      signIn: false,
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
<style scoped>
.bg-white {
  background: #141416;
}
.banner {
  align-self: center;
  font-size: 16px;
  padding-left: 20px;
}
</style>
