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
    <expense-summary></expense-summary>
  </div>
</template>

<script>
  import { allMonths } from "../../util/helpers.js";
  import DropdownVue from "../ui/DropdownVue.vue";
  import NavbarVue from "../ui/NavbarVue.vue";
  import ExpenseSummary from "./ExpenseSummary.vue";

  export default {
    name: "DurationExpenses",
    components: { DropdownVue, NavbarVue, ExpenseSummary },
    props: { month: String, index: String },
    computed: {
      // days() {
      //   return (
      //     new Date(this.endDate).getDate() -
      //     new Date(this.startDate).getDate() +
      //     1
      //   );
      // },
      months() {
        return allMonths();
      },
    },
  };
</script>

<style scoped>
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
