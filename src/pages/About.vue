<template>
  <div>
    <h5>About</h5>
    <div class="row">
      <div class="col-4">
        <q-input
            v-model="collegeId"
            filled
            type="text"
            label="College Enrollment Number"
            class="q-ma-sm"
            :rules="[(val) => !!val || 'Field is required']"
          />
      </div>
      <div class="col-4">
        <q-input
          filled
          v-model="currentLocation"
          type="text"
          label="Current Location"
          class="q-ma-sm"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </div>
      <div class="col-4">
        <q-input
          filled
          v-model="collegeMail"
          type="text"
          label="College Email"
          class="q-ma-sm"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-4">
        <q-toggle
          v-model="isWorking"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <q-input
            filled
            v-model="companyName"
            :disable="!isWorking"
            type="text"
            label="Company Name"
            class="q-ma-sm"
            :rules="[(val) => !!val || 'Field is required']"
          />
      </div>
      <div class="col-4">
        <q-input
            filled
            v-model="designation"
            :disable="!isWorking"
            type="text"
            label="Designation"
            class="q-ma-sm"
            :rules="[(val) => !!val || 'Field is required']"
          />
      </div>
      <div class="col-4">
        <q-input
          filled
          v-model="experience"
          :disable="!isWorking"
          type="text"
          label="Experience"
          class="q-ma-sm"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </div>
    </div>
    <div class="row items-right">
      <div class="col-4">
        <q-btn
          label="Update"
          color="primary"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWorking: true,
      collegeId:null,
      companyName:null,
      designation:null,
      currentLocation:null,
      session:null,
      course:null,
      collegeMail :null,
      experience:null
    }
  },
};
</script>

<style></style>
