<template>
  <div>
    <div class="menu">
      <navbar-vue
        section="produce"
        :links="['new', 'today', 'Past week', 'Past month', 'Choose period']"
      ></navbar-vue>
    </div>
    <prod-summary
      v-if="this.startDate && this.endDate"
      :period="this.days"
    ></prod-summary>
  </div>
</template>

<script>
  import ProdSummary from "./ProdSummary.vue";
  import NavbarVue from "../ui/Navbar.vue";
  import { TOMILLISECS } from "../../util/config.js";

  export default {
    name: "DurationProduce",
    components: { ProdSummary, NavbarVue },
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

.menu{
  justify-content: center;
}
</style>
