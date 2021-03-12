<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>
      <li v-for="car in list" :key="car.id">
        {{ car.name }}的价格是{{ car.price }}
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { CAR_LIST } from "../store/action";
export default {
  name: "HelloWorld",
  created() {
    this.carList();
  },
  computed: {
    ...mapGetters("car", { list: "list", title: "title" }),
  },
  methods: {
    ...mapActions("car", {
      carList: CAR_LIST,
    }),
  },
};
</script>

<style scoped></style>
