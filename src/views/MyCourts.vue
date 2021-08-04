<template>
  <div class="myCourts">
    <h1>{{ message }}</h1>
    <div v-for="court in courts" :key="court.id">
      <h2>{{ court.name }}</h2>
      <p>Facility: {{ court.facility }}</p>
      <p>Fees: $ {{ court.fees }}</p>
      <p>Lights: {{ court.lights }}</p>
      <p>Address: {{ court.address }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Here Are Your Courts",
      courts: [],
    };
  },
  created: function () {
    this.indexMyCourts();
  },
  methods: {
    indexMyCourts: function () {
      axios.get("/mycourts").then((response) => {
        this.courts = response.data;
        console.log("Your Courts:", this.courts);
      });
    },
  },
};
</script>
