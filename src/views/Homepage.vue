<template>
  <div
    class="page-header header-filter clear-filter purple-filter"
    data-parallax="true"
    style="background-image: url('./assets/img/background2.png')"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand">
            <h1>Welcome To Local Courts</h1>
            <h3>find courts in your area</h3>
            <button v-on:click="goTo()" class="btn btn-primary btn-round">Find Courts</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goTo: function () {
      location.href = "/courts";
    },
  },
};
</script>
