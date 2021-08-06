<template>
  <div class="courts-show">
    <h1>{{ court.name }}</h1>
    <p>Address: {{ court.address }}</p>
    <p>Fees: ${{ court.fees }}</p>
    <p>Facility: {{ court.facility }}</p>
    <p>Lights: {{ court.lights }}</p>
    <div id="map"></div>
    <router-link to="/home">Back</router-link>
  </div>
</template>
<style>
#map {
  height: 300px;
  width: auto;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      court: {},
    };
  },
  mounted: function () {
    this.displayMap();
  },
  created: function () {
    axios.get("/courts/" + this.$route.params.id).then((response) => {
      this.court = response.data;
    });
  },
  methods: {
    displayMap: function () {
      var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
      mapboxgl.accessToken = "pk.eyJ1Ijoid29ybW10IiwiYSI6ImNrczBrMzJycDFrbGoydm5wc2ZiamlqNGgifQ.I2AHKCY7cTV3-kuN2uUexQ";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-97.753, 30.375],
        zoom: 15,
      });
      console.log(map);
      document.getElementById("map").addEventListener("click", () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        map.flyTo({
          center: [-97.75, 30.37],
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });
    },
  },
};
</script>
