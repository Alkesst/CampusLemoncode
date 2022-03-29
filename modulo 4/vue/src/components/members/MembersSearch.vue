<template>
  <div class="search-wrapper">
    <form @submit.prevent>
      <v-text-field
        color="#BC544B"
        v-model="orgToSearch"
        label="Organisation"
        class="search-input"
        value="LemonCode"
        @keyup.enter="searchMembers"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "searchMembers",
  data: () => ({
    orgToSearch: localStorage.getItem("orgName") ?? "LemonCode",
  }),
  methods: {
    searchMembers() {
      localStorage.setItem("orgName", this.orgToSearch);
      this.$emit("input-org", this.orgToSearch);
    },
  },
});
</script>

<style lang="scss" scoped>
.search-wrapper {
  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.search-input {
  max-width: 300px;
}
</style>
