<template>
  <div class="section section-signup page-header" style="background-image: url('./assets/img/background2.png')">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mx-auto">
          <div class="card card-login">
            <form class="form" v-on:submit.prevent="createCourt()">
              <p class="description text-center">Create A Court</p>
              <div class="card-body">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">mail</i>
                    </span>
                  </div>
                  <input type="name" class="form-control" placeholder="Court Name" v-model="newCourtParams.name" />
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">lock_outline</i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="newCourtParams.facility"
                  />
                </div>
              </div>
              <div class="footer text-center">
                <button v-on:click="createCourt()" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <h1>Create A Court</h1>

    <form v-on:submit.prevent="createCourt()" class="form">
      <div>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
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
      <label>Zipcode:</label>
      <input type="text" v-model="newCourtParams.zipcode" />
      <div></div>
      <input type="submit" value="Submit" />
      <p><router-link to="/">Back</router-link></p>
    </form> -->
</template>
<style>
/* form {
 
  margin: 0 auto;
  width: 400px;
  
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
} */
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newCourtParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createCourt: function () {
      axios
        .post("/courts", this.newCourtParams)
        .then((response) => {
          this.$router.push("/");
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
