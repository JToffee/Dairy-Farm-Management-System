<template>
  <div>
    <navbar-vue
      :links="[
        'sales',
        'Add',
        'thisweek',
        'thismonth',
        'choose',
        'Graph',
        'home',
      ]"
    ></navbar-vue>
    <sales-summary :period="this.days"></sales-summary>
  </div>
</template>

<script>
import NavbarVue from "../ui/NavbarVue.vue";
import SalesSummary from "./SalesSummary.vue";
import { TOMILLISECS } from "../../util/config.js";

export default {
  components: { NavbarVue, SalesSummary },
  props: { duration: Number },
  data() {
    return {
      startDate: null,
      endDate: new Date(new Date().setHours(0, 0, 0, 0)),
    };
  },
  computed: {
    days() {
      return this.duration;
    },
  },
  created() {
    this.setStartDate();
    this.$store.dispatch("setStartDate", this.startDate);
    this.$store.dispatch("setEndDate", this.endDate);
  },
  updated() {
    this.setStartDate();
    this.$store.dispatch("setStartDate", this.startDate);
    this.$store.dispatch("setEndDate", this.endDate);
  },
  methods: {
    //set Start date
    setStartDate() {
      const milliseconds = this.days * TOMILLISECS;
      this.startDate =
        new Date(new Date().setHours(0, 0, 0, 0)).getTime() - milliseconds;
    },
  },
};
</script>

<style scoped>
.split {
  display: flex;
  height: 100%;
}
</style>
