<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 mx-auto">
        <div class="card card-login">
          <form v-on:click.prevent="createCourt()" class="form">
            <p class="description text-center">Create A Court</p>
            <div class="errors">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
            </div>
            <div class="card-body">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">label_important</i>
                  </span>
                </div>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Court Name"
                  v-model="newCourtParams.name"
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">label_important</i>
                  </span>
                </div>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Public or Private"
                  v-model="newCourtParams.facility"
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">label_important</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Fees"
                  v-model="newCourtParams.fees"
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">label_important</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Lights"
                  v-model="newCourtParams.lights"
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">label_important</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  v-model="newCourtParams.address"
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">label_important</i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Zipcode"
                  v-model="newCourtParams.zipcode"
                />
              </div>
            </div>
            <div class="footer text-center">
              <button class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<style>
.errors {
  color: red;
}
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
          this.$router.push("/courts");
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
