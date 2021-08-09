<template>
  <div class="courts-show">
    <h1>{{ court.name }}</h1>
    <p>Fees: ${{ court.fees }}</p>
    <p>Facility: {{ court.facility }}</p>
    <p>Lights: {{ court.lights }}</p>
    <p>Address: {{ court.address }}. Austin, TX</p>
    <p v-if="$parent.getUserId() == court.user_id">
      <router-link v-bind:to="`/courts/${court.id}/edit`"><button>Edit Court</button></router-link>
    </p>
    <router-link to="/home">Back</router-link>
  </div>
</template>
<style></style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      court: {},
    };
  },

  created: function () {
    axios.get("/courts/" + this.$route.params.id).then((response) => {
      this.court = response.data;
    });
  },
  methods: {},
};
</script>
