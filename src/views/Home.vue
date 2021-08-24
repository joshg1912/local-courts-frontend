<template>
  <div class="container">
    <div class="main main-raised">
      <div id="map" class="map"></div>
      <div class="text-center">
        <input v-model="searchFilter" placeholder="search by zipcode" />
      </div>
    </div>
    <div class="main main-raised mt-auto">
      <div v-for="court in filterBy(courts, searchFilter, 'zipcode', 'name', 'lights')" :key="court.id">
        <div class="description text-center">
          <h1>
            <hr />
            <router-link v-bind:to="`/${court.id}`" class="link">
              {{ court.name }}
            </router-link>
          </h1>
          <p class="text-primary">{{ court.address }}. Austin,TX</p>
          <p class="text-primary">{{ court.zipcode }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.text-primary {
  font-family: "Besley", serif;
}

#map {
  height: 400px;
  width: auto;
  margin-top: 150px;
}

.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}

.link {
  color: rgb(0, 138, 73);
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

      mapboxgl.accessToken = process.env.VUE_APP_KEY;

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
        console.log(feature);
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3><a href=${feature.properties.id}>` +
              feature.properties.title +
              "</a></h3>" +
              feature.properties.description +
              "</p>"
          )
          .addTo(map);
        popup.addTo(map);
      });
      console.log(map);
    },
  },
};
</script>
