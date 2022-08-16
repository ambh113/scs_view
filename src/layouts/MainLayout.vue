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
          <span id="line1">Central University of Karnataka | कर्नाटक केंद्रीय विश्‍वविद्यालय | ಕರ್ನಾಟಕ ಕೇಂದ್ರೀಯ ವಿಶ್ವವಿದ್ಯಾಲಯ</span><br>
          <span id="line2"><i>(Eshtablished by an Act of Parliament in 2009)</i></span><br>
          <span id="line3">School of Computer Science</span>
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
import Login from "src/pages/auth/Login.vue";
import Register from "src/pages/auth/Register.vue";

export default {
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
