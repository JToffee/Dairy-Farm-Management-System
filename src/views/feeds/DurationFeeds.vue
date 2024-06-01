<template>
  <div>
    <div class="menu">
      <dropdown-vue class="dropdown" :links="this.months">Month</dropdown-vue>
      <navbar-vue
        section="feeds"
        :links="['new', 'today', 'choose period']"
        class="navbar"
      >
      </navbar-vue>
    </div>
    <FeedsSummary class="summary" :duration="this.days"></FeedsSummary>
  </div>
</template>

<script>
  import DropdownVue from "../ui/DropdownVue.vue";
  import NavbarVue from "../ui/Navbar.vue";
  import FeedsSummary from "./FeedsSummary.vue";
  import { allMonths } from "../../util/helpers.js";
  // import { TOMILLISECS } from "../../util/config.js";

  export default {
    name: "DurationFeeds",
    components: { NavbarVue, FeedsSummary, DropdownVue },
    props: { month: String, index: String },
    data() {
      return {
        startDate: new Date(new Date().setHours(0, 0, 0, 0)),
        endDate: new Date(new Date().setHours(0, 0, 0, 0)),
        duration: 0,
      };
    },
    computed: {
      days() {
        return (
          new Date(this.endDate).getDate() -
          new Date(this.startDate).getDate() +
          1
        );
      },
      months() {
        return allMonths();
      },
    },
    created() {
      this.setStartDate();
      this.setEndDate();
      this.$store.dispatch("setStartDate", this.startDate);
      this.$store.dispatch("setEndDate", this.endDate);
    },
    updated() {
      this.setStartDate();
      this.setEndDate();
      this.$store.dispatch("setStartDate", this.startDate);
      this.$store.dispatch("setEndDate", this.endDate);
    },
    methods: {
      //set Start date
      setStartDate() {
        if (this.index) {
          this.startDate = new Date(
            new Date(new Date().getFullYear(), +this.index, 1).setHours(
              0,
              0,
              0,
              0
            )
          ).getTime();
        }
      },

      //set End date
      setEndDate() {
        if (this.index) {
          this.endDate = new Date(
            new Date(new Date().getFullYear(), +this.index + 1, 0).setHours(
              0,
              0,
              0,
              0
            )
          ).getTime();
        }
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
    justify-content: center;
    margin-top: 4vh;
  }
  /* .dropdown {
  /* margin-right: -3vw; */
  .navbar {
    flex-basis: 30%;
  }
  .dropdown {
    margin-top: 0;
    margin-right: -2.2vw;
  }
</style>
