<template>
  <!-- <div
    class="section section-signup page-header header-filter clear-filter purple-filter"
    style="background-image: url('./assets/img/background2.png')"
  > -->
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 mx-auto">
        <div class="card card-login">
          <form class="form" v-on:submit.prevent="submit()">
            <p class="description text-center">Signup</p>
            <div class="card-body">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">perm_identity</i>
                  </span>
                </div>
                <input
                  type="name"
                  class="form-control"
                  placeholder="Name"
                  v-model="newUserParams.name"
                />
              </div>
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
                  v-model="newUserParams.email"
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
                  v-model="newUserParams.password"
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
                  placeholder="Password Confirmation"
                  v-model="newUserParams.password_confirmation"
                />
              </div>
            </div>
            <div class="footer text-center">
              <button v-on:click="submit()" class="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
