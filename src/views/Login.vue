<template>
  <div class="hello" v-if="user">
    {{ title }}
    {{ user.name }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { USER_SET } from "../store/action";

export default {
  name: "HelloWorld",

  data: function () {
    return {};
  },

  created() {
    this.login();
  },
  computed: {
    ...mapGetters("user", { user: "user", title: "title" }),
  },
  methods: {
    async login() {
      //向后台服务器发出登录请求
      let res = await this.$http.reqLogin({
        name: "admin",
        passwd: "123456",
      });

      console.log(res);

      window.sessionStorage.setItem("token", true);
      this.setUser(res.user);
      this.$router.push('/');
    },

    ...mapActions("user", {
      setUser: USER_SET,
    }),
  },
};
</script>

<style scoped></style>
