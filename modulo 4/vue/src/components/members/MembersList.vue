<template>
  <v-card class="list text-color">
    <v-simple-table class="elevation-1" v-if="memberList.length > 0">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">
              <font class="text-header">Image</font>
            </th>
            <th class="text-center">
              <font class="text-header">Id</font>
            </th>
            <th class="text-center">
              <font class="text-header">Login</font>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in memberList" :key="member.id" class="text-center">
            <td class="normalized-column">
              <img :src="member.avatar_url" alt="" class="avatar-img" />
            </td>
            <td class="normalized-column">{{ member.id }}</td>
            <td class="normalized-column">
              <router-link :to="`detail/${member.login}`">
                {{ member.login }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="empty-list" v-else>
      <h3>Empty list</h3>
    </div>
  </v-card>
</template>

<script lang="ts">
import { get, getByName } from "@/services/githubservice";
import { MemberEntity } from "@/types";
import Vue from "vue";

export default Vue.extend({
  name: "MembersList",
  props: {
    orgName: {
      type: String,
      default: "lemoncode",
    },
  },
  data: () => ({
    memberList: [] as MemberEntity[],
  }),
  async created() {
    this.memberList = await get();
  },
  watch: {
    orgName: async function(newOrg) {
      this.memberList = await getByName(newOrg);
    },
  },
});
</script>

<style lang="scss" scoped>
.avatar-img {
  width: 60px;
  border-radius: 50%;
  margin: 20px, 0px;
}

.v-application a {
  color: #BC544B;
}

.empty-list {
  margin-top: 100px;
  text-align: center;
}

.text-header {
  color: #BC544B;
  font-weight: bold;
}

.list {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

.normalized-column {
  padding: 10px;
}
</style>
