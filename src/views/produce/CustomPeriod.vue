<template>
  <div class="custom-period">
    <div class="menu">
      <navbar-vue
        section="produce"
        :links="['new', 'today', 'Past week', 'Past month', 'Choose period']"
      ></navbar-vue>
    </div>
    <div class="results">
      <duration-form
        @submitHandler="search"
        @updateClicked="updateClicked"
        class="search"
      ></duration-form>

      <ProdSummary v-if="clicked && this.startDate && this.endDate"></ProdSummary>
    </div>
  </div>
</template>

<script>
  import ProdSummary from "./ProdSummary.vue";
  import NavbarVue from "../ui/Navbar.vue";
  import DurationForm from "../ui/DurationForm.vue";

  export default {
    components: { ProdSummary, NavbarVue, DurationForm },
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
  .produce-summary {
    margin-top: 20vh;
  }
  .custom-period {
    width: 100%;
    height: 100%;
  }
  .results {
    min-height: 90vh;
    margin-top: 10vh;
  }
</style>
