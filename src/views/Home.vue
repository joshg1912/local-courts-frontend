<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Search by name</p>
    <input v-model="searchFilter" />
    <div v-for="court in filterBy(courts, searchFilter, 'name')" :key="court.id">
      <h1>{{ court.name }}</h1>
      <p>{{ court.address }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  data: function () {
    return {
      message: "Welcome to Local Courts!",
      courts: [],
      searchFilter: "",
    };
  },
  created: function () {
    this.indexCourts();
  },
  mixins: [Vue2Filters.mixin],
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
