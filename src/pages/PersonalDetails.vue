<template>
  <div>
    <h5>Personal details page</h5>
    
    <q-avatar class="" size="100px">
      <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
    </q-avatar>
    <div class="row">
      <div class="col-4">
        <q-input
            filled
            v-model = "firstName"
            type="text"
            label="First Name"
            class="q-ma-sm"
            :rules="[(val) => !!val || 'Field is required']"
          />
      </div>
      <div class="col-4">
        <q-input
            filled
            v-model = "middleName"
            type="text"
            label="Middle Name"
            class="q-ma-sm"
            :rules="[(val) => !!val || 'Field is required']"
          />
      </div>
      <div class="col-4">
        <q-input
            filled
            v-model = "lastName"
            type="text"
            label="Last Name"
            class="q-ma-sm"
            :rules="[(val) => !!val || 'Field is required']"
          />
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <q-input
          filled
          v-model="email"
          type="email"
          label="Email"
          class="q-ma-sm"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </div>
      <div class="col-4">
        <q-input
          filled
          v-model="session"
          type="text"
          label="session"
          class="q-ma-sm"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </div>
      <div class="col-4">
        <q-input
          filled
          v-model="course"
          type="text"
          label="course"
          class="q-ma-sm"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName:null,
      middleName:null,
      lastName:null,
      email:null,
      session:null,
      course:null,
    }
  }
};
</script>

<style></style>
