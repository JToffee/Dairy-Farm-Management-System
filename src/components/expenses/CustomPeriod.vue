<template>
  <div class="custom-period">
    <div class="menu">
      <navbar-vue
        section="expenses"
        :links="['new', 'today', 'Choose period']"
      ></navbar-vue>
    </div>
    <div class="results">
      <duration-form-vue>
        @submitHandler="search" @updateClicked="updateClicked" class="search"
      </duration-form-vue>

      <expense-summary-vue
        v-if="clicked && this.startDate && this.endDate"
      ></expense-summary-vue>
    </div>
  </div>
</template>

<script>
  import { allMonths } from "../../util/helpers.js";
  import DurationFormVue from "../ui/DurationForm.vue";
  import NavbarVue from "../ui/Navbar.vue";
  import ExpenseSummaryVue from "./ExpenseSummary.vue";

  export default {
    name: "ExpensesPeriod",
    components: { NavbarVue, ExpenseSummaryVue, DurationFormVue },
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
