<template>
  <div class="thumbnails-container today-input">
    <summary-title
      title="Summary"
      :startDate="this.startDate"
      :endDate="this.endDate"
    ></summary-title>

    <div class="row">
      <table>
        <th class="category-th">Type</th>
        <th>Quantity</th>
        <th>Cost</th>
        <th>Avg Unit price</th>
        <th>Difference</th>
        <tbody>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
            <td>=70</td>
          </tr>
          <tr class="net">
            <td class="category">Net total</td>
            <td>700</td>
            <td>70000</td>
            <td>+60</td>
            <td>=70</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SummaryTitle from "../ui/summary/SummaryTitle.vue";

export default {
  name: "FeedsSummary",
  components: { SummaryTitle },
  props: { period: Number },
  data() {
    return {
      feeds: this.$store.state.feeds.feeds,
      data: [],
      days: this.period,
    };
  },
  computed: {
    startDate() {
      return this.$store.state.produce.startDate;
    },
    endDate() {
      return this.$store.state.produce.endDate;
    },
  },
  updated() {
    this.sales = this.$store.state.sales.sales;
    this.days = this.period;
  },
  mounted() {
    console.log(this.feeds);
  },
};
</script>
<style scoped>
.thumbnails-container {
  background: transparent;
  border: none;
  margin-top: -2vh;
}
.row {
  display: flex;
  flex-basis: 100%;
  margin-top: 5vh;
}

table {
  width: 100%;
  margin-top: -2vh;
  padding: 2vh 2vw;
}
th {
  text-align: center;
  height: 2vh;
  padding: 1vw;
  color: #e6d9d9;
  background-color: var(--mid-grey);

  font-size: 1.3rem;
  font-weight: lighter;
}
tr {
  text-align: center;
}
td {
  padding: 2vh;
  /* background-color: var(--primary600); */
}
tbody tr:nth-child(odd) {
  background-color: burlywood;
  /* 7a541a */
}
.net {
  background-color: #7a4d1a;
  font-weight: bold;
  color: #e9dede;
}

.category {
  font-weight: bold;
  color: var(--black);
  text-align: left;
  text-indent: 2vw;
}
.category-th {
  text-align: left;
  text-indent: 2vw;
}
</style>
