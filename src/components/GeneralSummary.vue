<template>
  <div class="thumbnails-container">
    <summary-title
      title="Today's summary"
      :startDate="this.today"
      :endDate="this.today"
    ></summary-title>
    <thumbnail-vue
      title="Milk Produce"
      :value="produce"
      unit="LITRES"
      :difference="prodDiff()"
    ></thumbnail-vue>
    <thumbnail-vue
      title="Sales"
      :value="sales"
      unit="KSH"
      :difference="salesDiff()"
      class="thumbnail--active"
      valueClass="thumbnail--active value-thumbnail"
    ></thumbnail-vue>
    <thumbnail-vue
      title="Expenses"
      value="30000"
      unit="KSH"
      difference="- 4500"
    ></thumbnail-vue>
    <thumbnail-vue
      title="Profit"
      value="30000"
      unit="KSH"
      difference="+30000"
    ></thumbnail-vue>
  </div>
</template>
<script>
  import SummaryTitle from "./ui/summary/SummaryTitle.vue";
  import ThumbnailVue from "./ui/summary/ThumbnailVue.vue";
  import { sum } from "../util/helpers";
  import { sumSale } from "../util/helpers";
  import { TOMILLISECS } from "../util/config";

  export default {
    name: "GeneralSummary",
    components: { SummaryTitle, ThumbnailVue },
    data() {
      return {
        today: new Date(new Date().setHours(0, 0, 0, 0)).getTime(),
        yesterday: new Date(new Date().setHours(0, 0, 0, 0)).getTime() - 1 * TOMILLISECS,
        allProduce: this.$store.state.produce.produce,
        allSales: this.$store.state.sales.sales,
      };
    },
    computed: {
      produce() {
        return Intl.NumberFormat("en-GB").format(sum(this.todayData(this.allProduce)));
      },

      sales() {
        const data =
          sumSale(this.todayData(this.allSales)) - sumSale(this.unsold(this.today));

        return Intl.NumberFormat("en-GB").format(data);
      },
    },
    methods: {
      todayData(data) {
        return data && data.filter((item) => item.date === this.today);
      },

      //PRODUCE
      prodDiff() {
        const prevData = sum(
          this.allProduce.filter((item) => item.date === this.yesterday)
        );

        const currData = this.produce.toString().replace(/,/g, "");

        const difference = +currData - prevData;

        if (difference > 0) return "+ " + Intl.NumberFormat("en-GB").format(difference);
        if (difference < 0)
          return "- " + Intl.NumberFormat("en-GB").format(Math.abs(difference));

        return difference;
      },

      //SALES

      //Category Data
      unsold(date) {
        const data = this.allSales;

        return (
          data &&
          data.filter((item) => {
            return item.category === "unsold" && item.date === date;
          })
        );
      },
      salesDiff() {
        const prevData =
          sumSale(this.allSales.filter((item) => item.date === this.yesterday)) -
          sumSale(this.unsold(this.yesterday));

        const currData = this.sales.toString().replace(/,/g, "");

        const difference = +currData - prevData;

        if (difference > 0) return "+ " + Intl.NumberFormat("en-GB").format(difference);
        if (difference < 0)
          return "- " + Intl.NumberFormat("en-GB").format(Math.abs(difference));

        return difference;
      },
    },
  };
</script>
<style scoped>
  .thumbnail {
    background-color: var(--dark-grey);
    border: solid 0.2px var(--color-background);
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    /* box-shadow: -4px -3px 45px 5px rgba(0, 0, 0, 0.35); */
    -webkit-box-shadow: 10px 11px 15px 3px #c1c8ce;
    border-radius: 1vw;
    box-shadow: inset;
    height: 38vh;
    padding-top: 5vh;
  }
  .thumbnail--active {
    color: #fff;
    background-color: var(--accent400);
  }
</style>
