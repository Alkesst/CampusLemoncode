<template>
  <div class="members-wrapper">
    <SearchMembers @input-org="updateOrg" />
    <MembersList :orgName="organisation" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MembersList from "./MembersList.vue";
import SearchMembers from "./MembersSearch.vue";

export default Vue.extend({
  name: "MembersWrapper",
  components: {
    MembersList,
    SearchMembers,
  },
  data: () => ({
    organisation: "lemoncode",
  }),
  mounted() {
    if (localStorage.organisation) {
      console.log(this.organisation, localStorage);
      this.organisation = localStorage.organisation;
    }
  },
  methods: {
    updateOrg(org: string) {
      this.organisation = org;
      this.persist();
    },
    persist() {
      localStorage.organisation = this.organisation;
    },
  },
});
</script>

<style lang="scss" scoped>
.members-wrapper {
  margin: 1%;
}
</style>
