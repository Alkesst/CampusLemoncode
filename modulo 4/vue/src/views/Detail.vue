<template>
  <div class="container-flex">
    <v-card class="detail-card" elevation="2">
      <div class="member-image">
        <img :src="member.avatar_url" alt="profile-pic" />
      </div>
      <div class="member-info">
        <h2>{{ member.login }}</h2>
        id:
        <h4>{{ member.id }}</h4>
        bio:
        <h3>{{ member.bio || "-" }}</h3>
        <v-btn class="return-button btn-primary" elevation="2" color="#BC544B" to="/">
          Return
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { getMember } from "@/services/githubservice";
import { MemberEntity } from "@/types";
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    member: {} as MemberEntity,
  }),
  computed: {
    id(): string {
      return String(this.$route.params.login);
    },
  },
  created() {
    getMember(this.id).then((member: MemberEntity | undefined) => {
      if (member) {
        this.member = member;
      }
    });
  },
});
</script>

<style lang="scss" scoped>
.member-image {
  text-align: center;
}

.member-info {
  text-align: center;
}

.btn-primary {
  color: white;
}

.container-flex {
  display: flex;
  justify-content: center;
}

.member-image img {
  border-radius: 50%;
  height: 10rem;
}

.detail-card {
  margin-top: 2rem;
  width: 25%;
  min-width: 20rem;
  padding: 2rem;
}

.return-button {
  margin-top: 1rem;
}
</style>
