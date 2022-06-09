<template>
  <q-card class="my-card" rounded>
    <q-form @submit="register">
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
            :rules="[(val) => !!val || 'Field is required']"
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
            :rules="[(val) => !!val || 'Field is required']"
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
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>
        <div class="col-md-6 col-sm-6">
          <q-select
            v-model="session"
            :options="sessionList"
            label="Session"
            class="q-ma-sm"
            :rules="[(val) => !!val || 'Field is required']"
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
          :rules="[(val) => !!val || 'Field is required']"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="password"
          label="Password"
          filled
          :type="isPwd ? 'password' : 'text'"
          class="q-ma-sm"
          :rules="[(val) => !!val || 'Field is required']"
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
          :rules="[
            (v) => !!v || 'Field is required',
            (v) => v == this.password || 'Password not match',
          ]"
        >
        </q-input>
      </q-card-section>

      <q-card-actions>
        <q-btn
          type="submit"
          class="full-width bg-primary text-white"
          flat
          rounded
        >
          Register
        </q-btn>
      </q-card-actions>
    </q-form>
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
      sessionList: [],
      isPwd: true,
    };
  },
  async created() {
    await this.getCourses();
    this.setSessionList();
  },
  methods: {
    setSessionList() {
      var start = 2010;
      var end = new Date().getFullYear();
      for (var i = start; i <= end; i++) {
        this.sessionList.push(i + " - " + (i <= 2019 ? i + 3 : i + 2));
      }
    },
    async getCourses() {
      const resp = await this.$axios.get("/courses");
      var courses = resp.data;
      console.log("resp", courses);
      this.courseList = courses.map((c) => c.course_name);
    },
    async register() {
      const payload = {
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        courseName: this.courseName,
        session: this.session,
      };
      try {
        const resp = await this.$axios.post("/aluminis", payload);
        console.log("resp", resp);
        this.$q.notify({
          message: "Register successfuly.",
          type: "positive",
        });
      } catch (ex) {
        this.$q.notify({
          message: ex.response.data,
          type: "negative",
        });
        console.log(ex);
      }
    },
  },
};
</script>

<style>
</style>