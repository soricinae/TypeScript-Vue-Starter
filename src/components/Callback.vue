<template>
</template>

<script lang="ts">
import Vue from "vue";
import { setIdToken, setAccessToken } from '../../utils/auth';

export default Vue.extend({
  name: '',
  mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      window.location.href = '/';
    });
  },
});
</script>