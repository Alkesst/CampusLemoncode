<template>
  <v-app>
    <Header />
    <div class="content-wrapper">
      <router-view />
    </div>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/layout/Header.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
});
</script>

<style lang="scss" scoped>
.content-wrapper {
  flex-grow: 1;
}
</style>
