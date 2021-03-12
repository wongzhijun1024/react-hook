<template>
  <div class="hello" v-if="user">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: function () {
    return { title: "注册页面" };
  },

  created() {
    this.registerAction();
  },
  computed: {},
  methods: {
    async registerAction() {
      let ob = { name: "root4", passwd: "root" };
      //向后台服务器发出登录请求
      let res = await this.$http.reqRegister(ob);

      console.log(res);

      //window.sessionStorage.setItem("token", true);
      //this.$router.push("/");
      //this.setUser(res.user);
    },
  },
};
</script>

<style scoped></style>
