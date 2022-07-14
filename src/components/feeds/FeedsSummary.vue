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
        <th>Difference</th>
        <tbody>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
          </tr>
          <tr>
            <td class="category">Wheat</td>
            <td>50kg</td>
            <td>1000</td>
            <td>=70</td>
          </tr>
          <tr class="net">
            <td class="category">Net total</td>
            <td>700</td>
            <td>70000</td>
            <td>+60</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { sum, sumSale } from "../../util/helpers.js";
import { TOMILLISECS } from "../../util/config.js";
// import {sumSale} from '../../util/helpers.js'
import SummaryTitle from "../ui/summary/SummaryTitle.vue";

export default {
  name: "FeedsSummary",
  components: { SummaryTitle },
  props: { period: Number },
  data() {
    return {
      sales: this.$store.state.sales.sales,
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
    allMilk() {
      return Intl.NumberFormat("en-GB").format(sum(this.durationData()));
    },
    netMilk() {
      const milk =
        sum(this.durationData()) - sum(this.durationCatData("unsold"));

      return Intl.NumberFormat("en-GB").format(milk);
    },

    totalAmount() {
      return Intl.NumberFormat("en-GB").format(sumSale(this.durationData()));
    },
    netAmount() {
      const amount =
        sumSale(this.durationData()) - sumSale(this.durationCatData("unsold"));

      return Intl.NumberFormat("en-GB").format(amount);
    },
    netDiff() {
      return 5;
    },
    amountDiff() {
      return this.differenceOfSum();
    },
    // netAmountDiff() {
    // 	return 5;
    // },
    kccMilk() {
      return Intl.NumberFormat("en-GB").format(
        sum(this.durationCatData("KCC"))
      );
    },
    kccAmount() {
      return Intl.NumberFormat("en-GB").format(
        sumSale(this.durationCatData("KCC"))
      );
    },
    kccDiff() {
      return this.differenceByCat("KCC");
    },

    retailMilk() {
      return Intl.NumberFormat("en-GB").format(
        sum(this.durationCatData("retail"))
      );
    },
    retailAmount() {
      return Intl.NumberFormat("en-GB").format(
        sumSale(this.durationCatData("retail"))
      );
    },
    retailDiff() {
      return this.differenceByCat("retail");
    },
    wholesaleMilk() {
      return Intl.NumberFormat("en-GB").format(
        sum(this.durationCatData("wholesale"))
      );
    },
    wholesaleAmount() {
      return Intl.NumberFormat("en-GB").format(
        sumSale(this.durationCatData("wholesale"))
      );
    },
    wholesaleDiff() {
      return this.differenceByCat("wholesale");
    },
    prepaidMilk() {
      return Intl.NumberFormat("en-GB").format(
        sum(this.durationCatData("prepaid"))
      );
    },
    prepaidAmount() {
      return Intl.NumberFormat("en-GB").format(
        sumSale(this.durationCatData("prepaid"))
      );
    },
    prepaidDiff() {
      return this.differenceByCat("prepaid");
    },
    billedMilk() {
      return Intl.NumberFormat("en-GB").format(
        sum(this.durationCatData("billed"))
      );
    },
    billedAmount() {
      return Intl.NumberFormat("en-GB").format(
        sumSale(this.durationCatData("billed"))
      );
    },
    billedDiff() {
      return this.differenceByCat("billed");
    },
    unsoldMilk() {
      return Intl.NumberFormat("en-GB").format(
        sum(this.durationCatData("unsold"))
      );
    },
    unsoldAmount() {
      return Intl.NumberFormat("en-GB").format(
        sumSale(this.durationCatData("unsold"))
      );
    },
    unsoldDiff() {
      return this.differenceByCat("unsold");
    },
  },
  updated() {
    this.sales = this.$store.state.sales.sales;
    this.days = this.period;
  },
  methods: {
    //set Start date
    setStartDate() {
      return new Date(new Date().setHours(0, 0, 0, 0)).getTime();
    },
    //Filter sales by dates
    durationData(data) {
      this.data = data || this.sales;

      const newData =
        this.data &&
        this.data.filter(
          (item) => item.date <= this.endDate && item.date >= this.startDate
        );

      return newData;
    },
    // specific date data
    dateCatData(category, data, date) {
      return (
        data &&
        data.filter((item) => item.category === category && item.date === date)
      );
    },
    //filter by category helper
    getDurationCatData(category, data, startDate, endDate) {
      // if(startDate === endDate)
      return (
        data &&
        data.filter((item) => {
          return (
            item.category === category &&
            item.date <= endDate &&
            item.date >= startDate
          );
        })
      );
    },
    // filter sales by dates and category

    durationCatData(category = null, data) {
      let cat = category;
      this.data = data || this.sales;

      // if (!this.startDate) this.startDate = this.setStartDate();
      // if (!this.endDate) this.endDate = new Date().getTime();

      const newData = this.getDurationCatData(
        cat,
        this.data,
        this.startDate,
        this.endDate
      );

      return newData;
    },

    differenceByCat(category = null, data) {
      let prevDate;
      let prevData;
      let currData;
      this.data = data || this.sales;
      let cat = category;

      // todays value - yesterdays value
      //days = 0
      if (this.days === 0) {
        //previous data
        console.log(this.days);
        prevDate =
          new Date(new Date().setHours(0, 0, 0, 0)).getTime() - 1 * TOMILLISECS;

        console.log(
          new Date(
            new Date(new Date().setHours(0, 0, 0, 0)).getTime() -
              1 * TOMILLISECS
          ).toLocaleDateString()
        );
        prevData = sumSale(this.dateCatData(cat, this.data, prevDate));

        console.log(prevData);

        currData = sumSale(
          this.dateCatData(cat, this.data, this.setStartDate())
        );
        console.log(currData);
      } else {
        prevDate = this.startDate - this.days * TOMILLISECS;
        console.log(this.days);
        currData = sumSale(
          this.getDurationCatData(
            cat,
            this.data,
            this.startDate,
            this.setStartDate()
          )
        );

        prevData = sumSale(
          this.getDurationCatData(cat, this.data, prevDate, this.startDate)
        );
      }

      let difference = currData - prevData;

      if (difference > 0) return "+ " + difference;
      if (difference < 0) return "- " + Math.abs(difference);

      return difference;
    },

    //COMPARE
    differenceOfSum() {
      let prevDate;
      let prevData;
      let currData;

      // todays value - yesterdays value
      //days = 0
      if (this.days === 0) {
        //previous data

        prevDate =
          new Date(new Date().setHours(0, 0, 0, 0)).getTime() - 1 * TOMILLISECS;

        prevData = sumSale(this.data.filter((item) => item.date === prevDate));

        currData = sumSale(
          this.data.filter((item) => item.date === this.setStartDate())
        );
        console.log(currData, prevData);
      } else {
        currData = sumSale(this.durationData());

        prevDate = this.startDate - this.days * TOMILLISECS;

        prevData = sumSale(
          this.data.filter(
            (item) => item.date <= this.startDate && item.date >= prevDate
          )
        );
        console.log(currData, prevData);
      }

      let difference = currData - prevData;

      if (difference > 0) return "+ " + difference;
      if (difference < 0) return "- " + Math.abs(difference);

      return difference;
    },
  },
  mounted() {},
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
