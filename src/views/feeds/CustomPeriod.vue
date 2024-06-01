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
    <div class="results">
      <duration-form
        @submitHandler="search"
        @updateClicked="updateClicked"
        class="form"
      ></duration-form>
      <feeds-summary v-if="clicked && this.startDate && this.endDate" />
    </div>
  </div>
</template>

<script>
  import FeedsSummary from "./FeedsSummary.vue";
  import DurationForm from "../ui/DurationForm.vue";
  import NavbarVue from "../ui/Navbar.vue";
  import { allMonths } from "../../util/helpers.js";
  import DropdownVue from "../ui/DropdownVue.vue";

  export default {
    name: "FeedsPeriod",
    components: { FeedsSummary, DurationForm, NavbarVue, DropdownVue },
    data() {
      return {
        startDate: this.$store.state.produce.startDate,
        endDate: this.$store.state.produce.endDate,
        clicked: false,
      };
    },
    computed: {
      months() {
        return allMonths();
      },
    },
    methods: {
      search() {
        this.clicked = true;
      },
      updateClicked() {
        this.clicked = false;
      },
    },
    updated() {
      this.startDate = this.$store.state.produce.startDate;
      this.endDate = this.$store.state.produce.endDate;

      // this.clicked = this.$store.state.produce.clicked;
    },
  };
</script>

<style scoped>
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dropdown {
    margin-top: -0.6vh;
    margin-right: -0.2vw;
  }
  .navbar {
    flex-basis: 27%;
  }
  .form {
    width: 60vw;
    margin-left: 14vw;
    margin-top: 7vh;
  }
  .sales {
    width: 80vw;
    margin-left: 10vw;
  }
  .results {
    padding-top: 2vh;
    background-color: white;
    margin: auto;
    margin-top: 12vh;
    width: 90vw;
    min-height: 90vh;
  }
</style>
