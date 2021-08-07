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
      mapboxgl.accessToken =

      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/wormmt/ckrgstreg40fu18pn38f7nj6o",
        center: [-97.767, 30.2412],
        zoom: 15,
      });
      console.log(map);
    },
  },
};
</script>
