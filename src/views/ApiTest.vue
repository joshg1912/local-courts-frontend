<template>
  <div class="test">
    <!-- <h1>Heres info about courts</h1>
    {{ datasets }}
    <p>{{ coordinates }}</p>
    <p>{{ imageurl[0] }}</p>
    <img v-bind:src="imageurl[0]" />
    <img v-bind:src="imageurl[1]" />
    <img v-bind:src="imageurl[2]" />
    <img v-bind:src="imageurl[3]" />
    <img v-bind:src="imageurl[4]" /> -->
  </div>
</template>
<script>
// import axios from "axios";
// export default {
//   data: function () {
//     return {
//       datasets: [],
//       coordinates: [],
//       imageurl: [],
//     };
//   },

//   created: function () {
//     this.getCoordinates();
//   },
//   methods: {
//     getCoordinates: function () {
//       axios
//         .get(
//           "https://api.mapbox.com/datasets/v1/wormmt/cks55annx0tdr22tgwixdcv81/features?access_token=sk.eyJ1Ijoid29ybW10IiwiYSI6ImNrczVlcWs2cDFoeHgybm80NXo1NmZwY3AifQ.OITJ9BiOr6wA9Hi0TJ4qUQ"
//         )
//         .then((response) => {
//           this.datasets = response.data;
//           console.log("All Data:", this.datasets);

//           var features = this.datasets.features;
//           this.coordinates = [];
//           this.imageurl = [];

//           for (let i = 0; i < features.length; i++) {
//             this.coordinates.push(features[i].geometry.coordinates);

//             this.imageurl.push(
//               `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${features[i].geometry.coordinates},15.2/300x200?access_token=pk.eyJ1Ijoid29ybW10IiwiYSI6ImNrczg1NWV4djJ4Y2sydnFtcDgyNXlkdmMifQ._rDK4Ue_fL-uOtpBPIczww`
//             );
//           }
//         });
//     },
//   },
// };
//
</script>
