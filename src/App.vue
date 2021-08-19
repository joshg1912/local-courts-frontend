<template>
  <div id="app">
    <nav
      class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="/courts">Local Courts</a>
          <!-- <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button> -->
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li v-if="!isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/signup">
                <i class="material-icons">assignment_ind</i>
                Signup
              </a>
            </li>

            <li v-if="!isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/login">
                <i class="material-icons">login</i>
                Login
              </a>
            </li>

            <li v-if="isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/logout">
                <i class="material-icons">logout</i>
                Logout
              </a>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/mycourts">
                <i class="material-icons">sports_tennis</i>
                My Courts
              </a>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <a class="nav-link" href="/new">
                <i class="material-icons">sports_tennis</i>
                Create A Court
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="container" data-background-color="black">
      <div class="footer bottom-0">
        <nav class="float-left">
          <ul>
            <li>
              <a href="https://www.creative-tim.com/">Creative Tim</a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/presentation">About Us</a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/blog">Blog</a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/license">Licenses</a>
            </li>
          </ul>
        </nav>
        <div class="copyright float-right">&copy;</div>
      </div>
    </footer>
  </div>
</template>

<style></style>
<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
