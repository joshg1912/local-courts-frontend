<template>
  <div class="home">
    <div
      class="page-header header-filter clear-filter purple-filter"
      data-parallax="true"
      style="background-image: url('./assets/img/background2.png')"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <div class="brand">
              <h1>Welcome To Local Courts</h1>
              <h3>find courts in your area</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="map"></div>
    <p>Search by name, zipcode</p>
    <input v-model="searchFilter" />
    <div v-for="court in filterBy(courts, searchFilter, 'zipcode', 'name', 'lights')" :key="court.id" id="container">
      <h1>
        <hr />
        <router-link v-bind:to="`/courts/${court.id}`">
          {{ court.name }}
        </router-link>
      </h1>
      <p>{{ court.address }}. Austin,TX</p>
      <p>{{ court.zipcode }}</p>
      <!-- <dialog id="court-details">
        <h1>Court Details</h1>
        <p>Lights: {{ court.lights }}</p>
        <p>Fees: $ {{ court.fees }}</p>
        <p>Facility: {{ court.facility }}</p>
        <button>Close</button>
      </dialog>
      <button v-on:click="showCourt(court)">More Info</button> -->
    </div>
  </div>
</template>

<style>
#map {
  height: 400px;
  width: auto;
}
.mapboxgl-marker {
  height: 20px;
  width: 20px;
  z-index: 5;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #305bad;
}
</style>

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
  mounted: function () {
    this.displayMap();
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
    // showCourt: function (court) {
    //   console.log(court);
    //   this.currentCourt = court;
    //   document.querySelector("#court-details").showModal();
    // },
    displayMap: function () {
      var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

      mapboxgl.accessToken = "pk.eyJ1Ijoid29ybW10IiwiYSI6ImNrczg1NWV4djJ4Y2sydnFtcDgyNXlkdmMifQ._rDK4Ue_fL-uOtpBPIczww";

      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/wormmt/cks57bab4121o18p5970uz9hb",
        center: [-97.769, 30.282],
        zoom: 8.5,
      });

      map.on("click", function (e) {
        // If the user clicked on one of your markers, get its information.
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["tennis-courts"], // replace with your layer name
        });
        if (!features.length) {
          return;
        }
        var feature = features[0];
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            "<h3>" + feature.properties.title + "<hr />" + "<h3>" + "<p>" + feature.properties.description + "</p>"
          )
          .addTo(map);
        popup.addTo(map);
      });
      console.log(map);
    },
  },
};
</script>
