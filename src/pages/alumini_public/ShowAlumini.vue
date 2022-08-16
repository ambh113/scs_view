<template>
  <div style="margin: 20px" class="row">
    <q-card
      v-for="list in lists"
      :key="list.id"
      dark
      bordered
      class="bg-grey-9 col-md-4"
      style="margin: 10px;"
    >
      <q-item-section avatar>
        <q-avatar class="" size="100px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-card-section>
        <div class="text-h6">
          {{ list.firstName }} {{ list.middleName }} {{ list.lastName }}
        </div>
        <div class="text-subtitle2">{{ list.email }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Company name : {{ list.company_name }}
      </q-card-section>
      <q-card-section>
        Designtion : {{ list.designtion }}
      </q-card-section>
      <q-card-section>
        Experience : {{ list.experience }}
      </q-card-section>
      <q-card-section>
        Location : {{ list.current_location }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [],
    };
  },
  async created() {
    const resp = await this.$axios.get("/aluminis");
    this.lists = resp.data;
    console.log(this.lists);
  },
};
</script>

<style></style>
