<template>
  <div class="create-court">
    <h1>Create A Court</h1>
    <form v-on:submit.prevent="createCourt()" class="form">
      <div>
        <label>Name:</label>
        <input type="text" v-model="newCourtParams.name" />
      </div>
      <div>
        <label>Facility:</label>
        <input type="text" v-model="newCourtParams.facility" />
      </div>
      <div>
        <label>Fees:</label>
        <input type="text" v-model="newCourtParams.fees" />
      </div>
      <div>
        <label>Lights:</label>
        <input type="text" v-model="newCourtParams.lights" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" v-model="newCourtParams.address" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<style>
form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
form li + li {
  margin-top: 1em;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newCourtParams: {},
    };
  },
  methods: {
    createCourt: function () {
      axios.post("/courts", this.newCourtParams).then((response) => {
        this.$router.push("/home");
        console.log(response.data);
      });
    },
  },
};
</script>
