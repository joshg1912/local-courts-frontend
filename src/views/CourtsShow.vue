<template>
  <div class="info">
    <div class="main main-raised text-center mt-auto mr-auto ml-auto">
      <h1 class="link">{{ court.name }}</h1>
      <p class="text-primary">Fees: {{ court.fees }}</p>
      <p class="text-primary">Facility: {{ court.facility }}</p>
      <p class="text-primary">Lights: {{ court.lights }}</p>
      <p class="text-primary">Address: {{ court.address }}. Austin, TX</p>
      <p class="text-primary">Zipcode: {{ court.zipcode }}</p>

      <p v-if="$parent.getUserId() == court.user_id">
        <router-link v-bind:to="`/courts/${court.id}/edit`">
          <button class="btn btn-primary btn-round">Edit Court</button>
        </router-link>
      </p>
      <p v-if="9 === court.id">
        <!-- this is Crockett Hs -->
        <!-- <img v-bind:src="imageurl[3]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7977,30.2128,14.62,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="6 === court.id">
        <!-- this is St Edwards -->
        <!-- <img v-bind:src="imageurl[4]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7537,30.2304,14.46,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="10 === court.id">
        <!-- this is Akins HS -->
        <!-- <img v-bind:src="imageurl[6]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.8012,30.1486,14.61,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="11 === court.id">
         <!-- this is Bowie HS -->
        <!-- <img v-bind:src="imageurl[9]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.8586,30.1873,14.61,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="7 === court.id">
        <!-- this is Joslin Park -->
        <!-- <img v-bind:src="imageurl[1]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.792,30.2287,15.76,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="16 === court.id">
        <!-- this is Ojeda MS -->
        <!-- <img v-bind:src="imageurl[5]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7125,30.1903,15.2,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="8 === court.id">
        <!-- this is Mendez MS -->
        <!-- <img v-bind:src="imageurl[10]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7434,30.189,14.85,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="13 === court.id">
        <!-- this is West Austin Park -->
        <!-- <img v-bind:src="imageurl[0]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7573,30.2768,15.59,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="12 === court.id">
         <!-- this is Covington MS -->
        <!-- <img v-bind:src="imageurl[7]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.8345,30.2129,14.55,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="14 === court.id">
        <!-- this is South Austin P&R -->
        <!-- <img v-bind:src="imageurl[2]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7678,30.2416,15.93,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p v-if="15 === court.id">
        <!-- this is Anderson High -->
        <!-- <img v-bind:src="imageurl[8]" /> -->
        <img
          v-bind:src="
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-97.7525,30.3749,15.06,0/300x200?access_token=` +
            key.api
          "
        />
      </p>
      <p>
        <router-link to="/courts" tag="button" class="btn btn-primary btn-round"
          >Back</router-link
        >
      </p>
    </div>
  </div>
</template>
<style>
.text-primary {
  font-family: "Besley", serif;
}
.link {
  color: rgb(0, 138, 73);
}

.info {
  margin-left: auto;
  width: 400px;
  height: 740px;
}
</style>
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
      key: {
        api: process.env.VUE_APP_KEY,
      },
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
