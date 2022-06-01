<template>
  <q-card class="my-card" rounded>
    <q-card-section>
      <q-img
        src="https://cuk.ac.in/assets/cukimg/cuk-full-logo.png"
        :ratio="45 / 9"
      />
    </q-card-section>
    <q-card-section class="row">
      <div class="col-md-4">
        <q-input
          filled
          v-model="firstName"
          type="text"
          label="First Name"
          class="q-ma-sm"
        />
      </div>
      <div class="col-md-4">
        <q-input
          filled
          v-model="middleName"
          type="text"
          label="Middle Name"
          class="q-ma-sm"
        />
      </div>
      <div class="col-md-4">
        <q-input
          filled
          v-model="lastName"
          type="text"
          label="Last Name"
          class="q-ma-sm"
        />
      </div>
    </q-card-section>
    <q-card-section class="row">
      <div class="col-md-6 col-sm-6">
        <q-select
          v-model="courseName"
          :options="courseList"
          label="Course"
          class="q-ma-sm"
        />
      </div>
      <div class="col-md-6 col-sm-6">
        <q-select
          v-model="session"
          :options="sessionList"
          label="Session"
          class="q-ma-sm"
        />
      </div>
    </q-card-section>
    <q-card-section>
      <q-input
        filled
        v-model="email"
        type="email"
        label="Email"
        class="q-ma-sm"
      />
    </q-card-section>
    <q-card-section>
      <q-input
        v-model="password"
        label="Password"
        filled
        :type="isPwd ? 'password' : 'text'"
        class="q-ma-sm"
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
    <q-card-section>
      <q-input
        v-model="confirmPassword"
        label="Confirm Password"
        filled
        type="password"
        class="q-ma-sm"
      >
      </q-input>
    </q-card-section>

    <q-card-actions>
      <q-btn
        class="full-width bg-primary text-white"
        flat
        rounded
        @click="register"
      >
        Register
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      firstName: null,
      middleName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      courseName: null,
      courseList: [],
      session: null,
      sessionList: ["2018-21", "2019-22", "2020-2022"],
      isPwd: true,
      res: '',
    };
  },
  async created() {
    await this.getCourses();
  },
  methods: {
    async getCourses() {
      const resp = await this.$axios.get("/courses");
      var courses = resp.data;
      console.log('resp', courses);
      this.courseList = courses.map(c => c.course_name);
    },
    async register() {
      // console.log("register", this.$axios);
      const resp = await this.$axios.get("/aluminis");
      this.res = resp.data;
      this.email = resp.data;
      console.log('resp', resp);
    },
  },
};
</script>

<style>
</style>