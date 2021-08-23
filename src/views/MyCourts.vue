<template>
  <div class="courts-new text-center">
    <div class="main main-raised">
      <div class="col-md-6 ml-auto mr-auto">
        <h1 class="description">{{ message }}</h1>
        <div v-for="court in courts" :key="court.id">
          <div class="description text-center">
            <hr />
            <h2>{{ court.name }}</h2>
            <p>Facility: {{ court.facility }}</p>
            <p>Fees: $ {{ court.fees }}</p>
            <p>Lights: {{ court.lights }}</p>
            <p>Address: {{ court.address }}</p>
            <router-link v-bind:to="`/courts/${court.id}/edit`">
              <button class="btn btn-primary btn-round">Edit Court</button>
            </router-link>
          </div>
        </div>
        <p><router-link to="/courts" tag="button" class="btn btn-primary btn-round">Back</router-link></p>
      </div>
    </div>
  </div>
</template>
<style>
.main {
  margin-left: 150px;
  margin-right: 150px;
}
.courts-new {
  margin-top: 200px;
  margin-left: 200px;
  margin-right: 200px;
  font-family: "Besley", serif;
}

.description {
  color: rgb(0, 138, 73);
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "My Courts",
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
