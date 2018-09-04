<template>
  <div>
    <h3 class="text-center">Private Data</h3>
    <hr/>

    {{ privateData }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppNav from "./AppNav.vue";
import { isLoggedIn, logout } from "../../utils/auth";
import { getPrivateData } from "../../utils/api";

export default Vue.extend({
  name: 'private',
  components: {
    AppNav,
  },
  data() {
    return {
      privateData: '',
    };
  },
  methods: {
    isLoggedIn() {
      return isLoggedIn();
    },
    getPrivateData() {
      if(!isLoggedIn()) {
        logout();
        return;
      }
      getPrivateData().then((data) => {
        this.privateData = data;
      });
    },
  },
  mounted() {
    this.getPrivateData();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>