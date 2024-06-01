<template>
  <div>
    <div class="menu">
      <navbar-vue
        section="sales"
        :links="['new', 'today', 'Past week', 'Past month', 'Choose period']"
      ></navbar-vue>
    </div>
    <div class="results">
      <duration-form
        style="margin-left: 20vw"
        @submitHandler="search"
        @updateClicked="updateClicked"
        class="form"
      ></duration-form>
      <sales-summary
        class="sales"
        v-if="clicked && this.startDate && this.endDate"
      ></sales-summary>
    </div>
  </div>
</template>

<script>
  import NavbarVue from "../ui/Navbar.vue";
  import SalesSummary from "./SalesSummary.vue";
  import DurationForm from "../ui/DurationForm.vue";

  export default {
    name: "SalesPeriod",
    components: { SalesSummary, NavbarVue, DurationForm },
    data() {
      return {
        startDate: this.$store.state.produce.startDate,
        endDate: this.$store.state.produce.endDate,
        clicked: false,
      };
    },
    computed: {},
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
    mounted() {
      console.log(this.startDate, this.endDate, this.clicked);
    },
  };
</script>

<style scoped>
.menu{
  justify-content: center;
}
  .form {
    margin: 6vh 10vw;
    width: 60vw;
  }
  .sales {
    width: 80vw;
    margin-left: 10vw;
  }
  .results {
    padding-top: 2vh;
    background-color: white;
    margin-top: 7vh;
    min-height: 90vh;
  }
</style>
