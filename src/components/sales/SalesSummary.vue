<template>
  <div class="thumbnails-container today-input">
    <summary-title
      title="Sales Summary"
      :startDate="startDate"
      :endDate="endDate"
    ></summary-title>
    <!-- <div class="row">
				<thumbnail
					title="KCC"
					milk="3000"
					money="50000"
					difference="+ 300"
				></thumbnail>
				<thumbnail
					title="Prepaid"
					milk="3000"
					money="50000"
					difference="+ 300"
				></thumbnail>
				<thumbnail
					title="Cash retail"
					milk="3000"
					money="50000"
					difference="+ 300"
				></thumbnail>
				<thumbnail
					title="Cash wholesale"
					milk="3000"
					money="50000"
					difference="+ 300"
				></thumbnail>
			</div> -->
    <!-- <div class="row">
				<thumbnail
					title="Billed"
					milk="3000"
					money="50000"
					difference="+ 300"
				></thumbnail>
				<thumbnail
					title="Unsold Milk"
					milk="3000"
					money="50000"
					difference="+ 300"
				></thumbnail>
				<thumbnail
					title="Total"
					milk="3000"
					money="50000"
					difference="+ 300"
				></thumbnail>
			</div> -->
    <div class="row">
      <table>
        <th class="category-th">Category</th>
        <th>Milk Qty(Litres)</th>
        <th>Amount</th>
        <th>Difference</th>
        <tbody>
          <tr>
            <td class="category">KCC</td>
            <td>{{ kccMilk }}</td>
            <td>{{ kccAmount }}</td>
            <td>{{ kccDiff }}</td>
          </tr>
          <tr>
            <td class="category">Prepaid</td>
            <td>{{ prepaidMilk }}</td>
            <td>{{ prepaidAmount }}</td>
            <td>{{ prepaidDiff }}</td>
          </tr>
          <tr>
            <td class="category">Retail</td>
            <td>{{ retailMilk }}</td>
            <td>{{ retailAmount }}</td>
            <td>{{ retailDiff }}</td>
          </tr>
          <tr>
            <td class="category">Wholesale</td>
            <td>{{ wholesaleMilk }}</td>
            <td>{{ wholesaleAmount }}</td>
            <td>{{ wholesaleDiff }}</td>
          </tr>
          <tr>
            <td class="category">Billed</td>
            <td>{{ billedMilk }}</td>
            <td>{{ billedAmount }}</td>
            <td>{{ billedDiff }}</td>
          </tr>
          <tr>
            <td class="category">Unsold</td>
            <td>{{ unsoldMilk }}</td>
            <td>{{ unsoldAmount }}</td>
            <td>{{ unsoldDiff }}</td>
          </tr>
          <tr>
            <td class="category">Gross Total</td>
            <td>{{ allMilk }}</td>
            <td>{{ totalAmount }}</td>
            <td>{{ amountDiff }}</td>
          </tr>
          <tr class="net">
            <td class="category">Net total</td>
            <td>{{ netMilk }} Litres</td>
            <td>KES {{ netAmount }}</td>
            <td>_</td>
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
    name: "SalesSummary",
    components: { SummaryTitle },
    props: { period: Number },
    data() {
      return {
        sales: this.$store.state.sales.sales,
        data: [],
      };
    },
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
          sumSale(this.durationData()) -
          sumSale(this.durationCatData("unsold"));

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
          data.filter(
            (item) => item.category === category && item.date === date
          )
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
            new Date(new Date().setHours(0, 0, 0, 0)).getTime() -
            1 * TOMILLISECS;

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
            new Date(new Date().setHours(0, 0, 0, 0)).getTime() -
            1 * TOMILLISECS;

          prevData = sumSale(
            this.data.filter((item) => item.date === prevDate)
          );

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
    margin-top: 2vh;
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
    color: var(--color-background);
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
    background-color: var(--lightSteelBlue);
  }
  .category {
    font-weight: bold;
    /* color: var(--primary600); */
    color: var(--black);
    text-align: left;
    text-indent: 2vw;
  }
  .category-th {
    text-align: left;
    text-indent: 2vw;
  }
  tbody .net {
    background-color: var(--primary700);
    font-weight: bold;
  }
  .net .category {
    color: var(--color-background);
  }
  .net td {
    color: var(--color-background);
  }
</style>
