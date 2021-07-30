<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="court in courts" :key="court.id">
      <h1>{{ court.name }}</h1>
      <p>{{ court.address }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Local Courts!",
      courts: [],
    };
  },
  created: function () {
    this.indexCourts();
  },
  methods: {
    indexCourts: function () {
      axios.get("/courts").then((response) => {
        this.courts = response.data;
        console.log("All Courts:", this.courts);
      });
    },
  },
};
</script>
