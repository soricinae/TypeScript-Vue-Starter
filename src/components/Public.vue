<template>
  <div>
    <h3 class="text-center">Public data</h3>
    <hr/>

    {{ publicData }}

    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppNav from "./AppNav.vue";
import { isLoggedIn } from "../../utils/auth";
import { getPublicData } from '../../utils/api';

export default Vue.extend({
  components: {
    AppNav,
  },
  data() {
    return {
      publicData: '',
    };
  },
  methods: {
    isLoggedIn() {
      return isLoggedIn();
    },
    getData() {
      getPublicData().then((data) => {
        this.publicData = data;
      });
    },
  },
  mounted() {
    this.getData();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>