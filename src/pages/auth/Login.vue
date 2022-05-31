<template>
  <!-- <div class="row justify-center" > -->
  <q-card class="my-card" rounded>
    <q-card-section>
      <q-img
        src="https://cuk.ac.in/assets/cukimg/cuk-full-logo.png"
        :ratio="45 / 9"
      />
    </q-card-section>
    <q-card-section>
      <q-input filled v-model="email" type="email" label="Email" />
    </q-card-section>
    <q-card-section>
      <q-input
        v-model="password"
        label="Password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Password with toggle"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </q-card-section>
    <q-card-section class="row">
      <div class="col">
        <q-checkbox v-model="remember" label="Remember Me" />
      </div>
      <div class="col self-center text-primary cursor-pointer" @click="forp">
        forget password ?
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn
        class="full-width bg-primary text-white"
        flat
        rounded
        @click="login"
      >
        Login
      </q-btn>
    </q-card-actions>
  </q-card>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isPwd: true,
      remember: false,
    };
  },
  methods: {
    login() {
      console.log(this.email + this.password);
    },
    forp() {},
  },
};
</script>

<style scoped>
.my-card {
  margin-top: 10vh;
  width: 450px;
}
</style>