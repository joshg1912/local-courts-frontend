<template>
  <!-- <div
    class="section section-signup page-header header-filter clear-filter purple-filter"
    style="background-image: url('./assets/img/background2.png')"
  > -->
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mx-auto">
          <div class="card card-login">
            <form class="form" v-on:submit.prevent="submit()">
              <p class="description text-center">Login With Email</p>
              <div class="card-body">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">mail</i>
                    </span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    v-model="newSessionParams.email"
                  />
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
                    v-model="newSessionParams.password"
                  />
                </div>
              </div>
              <div class="footer text-center">
                <button v-on:click="submit()" class="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<style>
.card {
  margin-top: 100px;
  margin-bottom: 235px;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          console.log(response.data);
          this.$router.push("/courts");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
