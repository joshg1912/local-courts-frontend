<template>
  <div class="container">
    <div class="court-edit">
      <div class="main main-raised text-center mt-auto mr-auto ml-auto">
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

          <input
            type="submit"
            value="Update Info"
            class="btn btn-primary btn-round"
          />
          <button v-on:click="destroyCourt()" class="btn btn-primary btn-round">
            Delete Court
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
.court-edit {
  margin-top: 200px;
  margin-left: 200px;
  margin-right: 200px;
  height: 530px;
}
</style>
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
      axios
        .patch(`/courts/${this.$route.params.id}`, this.currentCourtParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/${response.data.id}`);
        });
    },
    destroyCourt: function () {
      var result = confirm("Delete Court?");
      if (result) {
        axios.delete(`/courts/${this.$route.params.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/courts");
        });
      }
    },
  },
};
</script>
