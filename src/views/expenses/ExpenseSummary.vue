<template>
  <div>
    <div class="expenses-summary">
      <summary-title-vue
        title="Expenses Summary"
        :startDate="startDate"
        :endDate="endDate"
      ></summary-title-vue>
      <div class="tabs-container">
        <tabbed-summary-vue
          title="Feeds"
          value="9000"
          unit="KES"
          difference="-3000"
        ></tabbed-summary-vue>
        <tabbed-summary-vue
          title="Farm operations"
          value="9000"
          unit="KES"
          difference="-3000"
        ></tabbed-summary-vue>
        <tabbed-summary-vue
          title="Machine maintenance"
          value="9000"
          unit="KES"
          difference="-3000"
        ></tabbed-summary-vue>
        <tabbed-summary-vue
          title="Fuel"
          value="9000"
          unit="KES"
          difference="-3000"
        ></tabbed-summary-vue>
        <tabbed-summary-vue
          title="Payroll"
          value="9000"
          unit="KES"
          difference="-3000"
        ></tabbed-summary-vue>
        <tabbed-summary-vue
          title="Vet Services"
          value="9000"
          unit="KES"
          difference="-3000"
        ></tabbed-summary-vue>
        <tabbed-summary-vue
          title="Transport"
          value="9000"
          unit="KES"
          difference="-3000"
        ></tabbed-summary-vue>
      </div>
    </div>
  </div>
</template>

<script>
  import SummaryTitleVue from "../ui/summary/SummaryTitle.vue";
  import TabbedSummaryVue from "../ui/summary/TabbedSummary.vue";

  export default {
    name: "ExpenseSummary",
    components: { SummaryTitleVue, TabbedSummaryVue },
    props: { period: Number },
    computed: {
      days() {
        return this.period;
      },
      startDate() {
        return this.$store.state.produce.startDate;
      },
      endDate() {
        return this.$store.state.produce.endDate;
      },
    },
  };
</script>

<style>
  .expenses-summary {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    margin-top: 3vw;
  }
  .tabs-container {
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-around;
    border: 1px solid var(--light-grey);
    background-color: var(--white);
    padding: 40px;
  }
</style>
