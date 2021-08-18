<template>
  <div class="show">
    <div class="info">
      <h1>{{ court.name }}</h1>
      <p>Fees: ${{ court.fees }}</p>
      <p>Facility: {{ court.facility }}</p>
      <p>Lights: {{ court.lights }}</p>
      <p>Address: {{ court.address }}. Austin, TX</p>
      <p v-if="$parent.getUserId() == court.user_id">
        <router-link v-bind:to="`/courts/${court.id}/edit`"><button>Edit Court</button></router-link>
      </p>
      <p v-if="17 === court.id">
        <img v-bind:src="imageurl[3]" />
        <!-- this is Crockett Hs -->
      </p>
      <p v-if="18 === court.id">
        <img v-bind:src="imageurl[4]" />
        <!-- this is St Edwards -->
      </p>
      <p v-if="19 === court.id">
        <img v-bind:src="imageurl[6]" />
        <!-- this is Akins HS -->
      </p>
      <p v-if="20 === court.id">
        <img v-bind:src="imageurl[9]" />
        <!-- this is Bowie HS -->
      </p>
      <p v-if="21 === court.id">
        <img v-bind:src="imageurl[1]" />
        <!-- this is Joslin Park -->
      </p>
      <p v-if="22 === court.id">
        <img v-bind:src="imageurl[5]" />
        <!-- this is Ojeda HS -->
      </p>
      <p v-if="23 === court.id">
        <img v-bind:src="imageurl[10]" />
        <!-- this is Mendez MS -->
      </p>
      <p v-if="3 === court.id">
        <img v-bind:src="imageurl[0]" />
        <!-- this is West Austin Park -->
      </p>
      <p v-if="24 === court.id">
        <img v-bind:src="imageurl[7]" />
        <!-- this is Covington MS -->
      </p>
      <p v-if="5 === court.id">
        <img v-bind:src="imageurl[2]" />
        <!-- this is South Austin P&R -->
      </p>
      <p v-if="6 === court.id">
        <img v-bind:src="imageurl[8]" />
        <!-- this is Anderson High -->
      </p>
      <p><router-link to="/courts">Back</router-link></p>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      court: {},
      dataset: [],
      datasets: [],
      coordinates: [],
      imageurl: [],
    };
  },

  created: function () {
    axios.get("/courts/" + this.$route.params.id).then((response) => {
      this.court = response.data;
    });
    this.getCoordinates();
  },
  methods: {
    getCoordinates: function () {
      axios
        .get(
          `https://api.mapbox.com/datasets/v1/wormmt/cks55annx0tdr22tgwixdcv81/features?access_token=${process.env.VUE_APP_SECRET}`
        )
        .then((response) => {
          this.datasets = response.data;
          console.log("All Data:", this.datasets);

          var features = this.datasets.features;
          this.coordinates = [];
          this.imageurl = [];

          for (let i = 0; i < features.length; i++) {
            this.coordinates.push(features[i].geometry.coordinates);

            this.imageurl.push(
              `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${features[i].geometry.coordinates},15/300x200?access_token=${process.env.VUE_APP_KEY}`
            );
          }
        });
    },
  },
};
</script>
