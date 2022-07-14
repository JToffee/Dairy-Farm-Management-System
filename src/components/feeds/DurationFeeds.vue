<template>
  <div>
    <div class="menu">
      <dropdown-vue class="dropdown" :links="this.months">Month</dropdown-vue>
      <navbar-vue
        :links="['today', 'customperiod', 'add', 'home']"
        class="navbar"
      >
      </navbar-vue>
    </div>
    <FeedsSummary :period="this.days" class="summary"></FeedsSummary>
  </div>
</template>

<script>
import DropdownVue from "../ui/DropdownVue.vue";
import NavbarVue from "../ui/NavbarVue.vue";
import FeedsSummary from "./FeedsSummary.vue";
import { allMonths } from "../../util/helpers.js";
import { TOMILLISECS } from "../../util/config.js";

export default {
  name: "DurationFeeds",
  components: { NavbarVue, FeedsSummary, DropdownVue },
  props: { month: String },
  data() {
    return {
      startDate: null,
      endDate: new Date(new Date().setHours(0, 0, 0, 0)),
      duration: 0,
    };
  },
  computed: {
    days() {
      return this.duration;
    },
    months() {
      return allMonths();
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
  mounted() {
    allMonths();
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5vh;
}
/* .dropdown {
  /* margin-right: -3vw; */
.navbar {
  flex-basis: 10%;
}
</style>
