<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Search by name</p>
    <input v-model="searchFilter" />
    <div v-for="court in filterBy(courts, searchFilter, 'name')" :key="court.id" id="container">
      <h1>
        <hr />
        <router-link v-bind:to="`/courts/${court.id}`">
          {{ court.name }}
        </router-link>
      </h1>
      <p>{{ court.address }}</p>
      <dialog id="court-details">
        <h1>Court Details</h1>
        <p>Lights: {{ court.lights }}</p>
        <p>Fees: $ {{ court.fees }}</p>
        <p>Facility: {{ court.facility }}</p>
        <button>Close</button>
      </dialog>
      <button v-on:click="showCourt(court)">More Info</button>
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
  // mounted: function () {
  //   this.displayMap();
  // },
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
    showCourt: function (court) {
      console.log(court);
      this.currentCourt = court;
      document.querySelector("#court-details").showModal();
    },
    // displayMap: function () {
    //   var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

    //   mapboxgl.accessToken = "pk.eyJ1Ijoid29ybW10IiwiYSI6ImNrczBrMzJycDFrbGoydm5wc2ZiamlqNGgifQ.I2AHKCY7cTV3-kuN2uUexQ";
    //   var map = new mapboxgl.Map({
    //     container: "map",
    //     style: "mapbox://styles/mapbox/streets-v11",
    //   });
    //   console.log(map);
    //},
  },
};
</script>
