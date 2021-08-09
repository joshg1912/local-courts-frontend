<template>
  <div class="court-edit">
    <form v-on:submit.prevent="updateCourt()">
      <h1>Edit Court</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="currentCourtParams.name" />
      </div>
      <div>
        <label>Fees:</label>
        <input type="text" v-model="currentCourtParams.fees" />
      </div>
      <div>
        <label>Lights:</label>
        <input type="text" v-model="currentCourtParams.lights" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" v-model="currentCourtParams.address" />
      </div>
      <div>
        <label>Facility:</label>
        <input type="text" v-model="currentCourtParams.facility" />
      </div>
      <div>
        <label>Zipcode:</label>
        <input type="text" v-model="currentCourtParams.zipcode" />
      </div>

      <input type="submit" value="Update Info" />
      <button v-on:click="destroyCourt()">Delete Court</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentCourtParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/courts/${this.$route.params.id}`).then((response) => {
      console.log("Court Info:", response.data);
      this.currentCourtParams = response.data;
    });
  },
  methods: {
    updateCourt: function () {
      axios.patch(`/courts/${this.$route.params.id}`, this.currentCourtParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/courts/${response.data.id}`);
      });
    },
    destroyCourt: function () {
      axios.delete(`/courts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/home");
      });
    },
  },
};
</script>
