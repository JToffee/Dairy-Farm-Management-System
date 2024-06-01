<template>
  <div>
    <div class="menu">
      <dropdown-vue class="dropdown" :links="this.months">Month</dropdown-vue>
      <navbar-vue
        section="expenses"
        :links="['new', 'today', 'choose period']"
        class="navbar"
      >
      </navbar-vue>
    </div>
    <expense-summary-vue
      v-if="this.startDate && this.endDate"
      :period="this.days"
    ></expense-summary-vue>
  </div>
</template>

<script>
  // import { allMonths } from "../../util/helpers.js";
  import DropdownVue from "../ui/DropdownVue.vue";
  import NavbarVue from "../ui/Navbar.vue";
  import ExpenseSummaryVue from "./ExpenseSummary.vue";
  import { TOMILLISECS } from "../../util/config.js";

  export default {
    name: "DurationExpenses",
    components: { DropdownVue, NavbarVue, ExpenseSummaryVue },
    // props: { month: String, index: String },
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
    mounted() {},
  };
</script>

<style scoped>
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 4vh;
  }
  .dropdown {
    margin-right: -3vw;
  }
  .navbar {
    flex-basis: 30%;
  }
  .dropdown {
    margin-top: 0;
    margin-right: -2.2vw;
  }
</style>
