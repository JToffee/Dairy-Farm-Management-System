<template>
<main>
  <div class="averages">
    <p>
      Lactation/Cow
      <span>45.3L</span>
    </p>
    <p>
      Litres/Day
      <span>500L</span>
    </p>
    <P>
      Price/Litre
      <span>KES 50 </span>
    </P>
    <P>
      MFPR
      <span> 1.5</span>
    </P>
  </div>

  <div class="thumbnails-container">
    <summary-title
    class="title"
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
      title="Revenue"
      :value="sales"
      unit="KSH"
      :difference="salesDiff()"
      valueClass="thumbnail--active value-thumbnail"
    ></thumbnail-vue>

    <thumbnail-vue
      title="Expenses"
      value="30000"
      unit="KSH"
      difference="- 4500"
    ></thumbnail-vue>
    
    <thumbnail-vue
      title="Net Income"
      value="30000"
      unit="KSH"
      difference="+30000"
    ></thumbnail-vue>

  </div>

  <div class="pie">
    <img :src=  "pie" alt="pie">
  </div>

  <div class="yearly">
Yearly summary - Shows a graph containing all the months of the year , shwoing production and costs... filterable by year
  </div>
</main>

</template>
<script>
  import SummaryTitle from "./ui/summary/SummaryTitle.vue";
  import ThumbnailVue from "./ui/summary/ThumbnailVue.vue";
  import { sum } from "../util/helpers";
  import { sumSale } from "../util/helpers";
  import { TOMILLISECS } from "../util/config";
  import pie from "../assets/pie1.png"
  export default {
    name: "GeneralSummary",
    components: { SummaryTitle, ThumbnailVue },
    data() {
      return {
        today: new Date(new Date().setHours(0, 0, 0, 0)).getTime(),
        yesterday:
          new Date(new Date().setHours(0, 0, 0, 0)).getTime() - 1 * TOMILLISECS,
        allProduce: this.$store.state.produce.produce,
        allSales: this.$store.state.sales.sales,
        pie: pie
      };
    },
    computed: {
      produce() {
        return Intl.NumberFormat("en-GB").format(
          sum(this.todayData(this.allProduce))
        );
      },

      sales() {
        const data =
          sumSale(this.todayData(this.allSales)) -
          sumSale(this.unsold(this.today));

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

        if (difference > 0)
          return "+ " + Intl.NumberFormat("en-GB").format(difference);
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
          sumSale(
            this.allSales.filter((item) => item.date === this.yesterday)
          ) - sumSale(this.unsold(this.yesterday));

        const currData = this.sales.toString().replace(/,/g, "");

        const difference = +currData - prevData;

        if (difference > 0)
          return "+ " + Intl.NumberFormat("en-GB").format(difference);
        if (difference < 0)
          return "- " + Intl.NumberFormat("en-GB").format(Math.abs(difference));

        return difference;
      },
    },
  };
</script>
<style lang="scss" scoped>
  main{
    display: flex;

    .pie{
      flex-basis: 40%;

      img{
        width: 10rem;
      }
    }

  }
  .thumbnails-container{
    padding: 0.5rem;
    justify-content: space-evenly;
    flex-basis: 50%;

    
    .thumbnail {
      background-color: transparent;
      border: none;
      border-radius: 0;
      box-shadow: none;
      height: 15vh;
      padding: 0;
      margin-top: 0;
      font-size: 0.88rem;
      
    }
    span{
      font-size: 1.5rem;
      color: var(--primary400);
      font-weight: bold;
      margin-left: 1vw;
    }
     & .value-thumbnail {
        color: var(--primary300);
        font-size: 0.88rem;
    }
    .thumbnail--active {
      color: #fff;
      background-color: var(--accent400);
    }
   
   
  }
  .title{
      margin-top: -4vh;
      margin-bottom: 0;
    }
</style>
