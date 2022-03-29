<template>
  <header>
    <nav>
      <v-app-bar color="#BC544B" class="white--text">
        <v-toolbar-title to="/">
          <router-link class="" to="/">
            Member-Finder-2000
          </router-link>
        </v-toolbar-title>
      </v-app-bar>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
});
</script>

<style lang="scss" scoped>
  .v-application a {
    color: white;
  }
</style>
