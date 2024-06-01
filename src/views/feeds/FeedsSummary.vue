<template>
  <div class="thumbnails-container today-input">
    <summary-title
      title="Feeds Summary"
      :startDate="this.startDate"
      :endDate="this.endDate"
    ></summary-title>

    <div class="row">
      <table>
        <th class="category-th">Type</th>
        <th>Quantity</th>
        <th>Cost (KSH)</th>
        <th>Avg Unit price (Per KG)</th>
        <th>Difference (Qty)</th>
        <tbody v-if="this.filteredData.length > 0">
          <tr v-for="feed in filteredData" :key="feed.id">
            <td class="category">
              {{ feed.name.charAt(0).toUpperCase() }}{{ feed.name.slice(1) }}
            </td>
            <td>{{ feed.totalQty }} {{ feed.qty.unitName }}</td>
            <td>{{ feed.totalCost }}</td>
            <td>
              {{ feed.totalCost / feed.totalQty.toFixed(2) }}
            </td>
            <td>{{ this.difference(feed.name) }}</td>
          </tr>

          <tr class="net">
            <td class="category">Total</td>
            <td>{{ this.totalQty }} KG</td>
            <td>KES {{ this.totalCost }}</td>
            <td>KES {{ this.avgUnitPrice }}</td>
            <td>{{ this.difference(null) }} KG</td>
          </tr>
          <!-- <tr>
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
          </tr> -->
        </tbody>
        <tbody v-else>
          <tr class="net">
            <td class="category">Total</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import SummaryTitle from "../ui/summary/SummaryTitle.vue";
  import { sumFeedsQty, sumFeedsCost } from "../../util/helpers.js";
  import { TOMILLISECS } from "../../util/config.js";

  export default {
    name: "FeedsSummary",
    components: { SummaryTitle },

    props: { duration: Number },

    data() {
      return {
        feeds: this.$store.state.feeds.feeds,
        data: [],
      };
    },

    computed: {
      startDate() {
        return this.$store.state.produce.startDate;
      },
      endDate() {
        return this.$store.state.produce.endDate;
      },
      totalQty() {
        return Intl.NumberFormat("en-GB").format(
          sumFeedsQty(this.durationData())
        );
      },
      totalCost() {
        return Intl.NumberFormat("en-GB").format(
          sumFeedsCost(this.durationData())
        );
      },
      avgUnitPrice() {
        return Intl.NumberFormat("en-GB").format(
          (sumFeedsCost(this.feeds) / sumFeedsQty(this.durationData())).toFixed(
            2
          )
        );
      },
      filteredData() {
        return this.durationData();
      },
    },

    methods: {
      //Filter feeds of a duration based on the set start date and end date

      durationData(data) {
        this.data = data || this.feeds;

        const newData =
          this.data &&
          this.data.filter(
            (item) => item.date <= this.endDate && item.date >= this.startDate
          );

        return newData;
      },

      //Find difference of feed quantitites of two set durations. e.g this august and last july

      difference(feed) {
        let feedName = feed;

        let prevData, difference, currData;
        if (feedName) {
          currData = sumFeedsQty(
            this.filteredData.filter((feed) => feed.name === feedName)
          );
        } else {
          currData = sumFeedsQty(this.filteredData);
        }

        if (this.duration > 1) {
          let prevStartDate = new Date(
            new Date(
              new Date().getFullYear(),
              new Date(this.startDate).getMonth() - 1,
              1
            ).setHours(0, 0, 0, 0)
          ).getTime();
          let prevEndDate = new Date(
            new Date(
              new Date().getFullYear(),
              new Date(this.startDate).getMonth(),
              0
            ).setHours(0, 0, 0, 0)
          ).getTime();

          if (feedName) {
            //DIFFERENCE FOR INDIVIDUAL FEEDS
            prevData = sumFeedsQty(
              this.feeds.filter(
                (feed) =>
                  feed.date >= prevStartDate &&
                  feed.date <= prevEndDate &&
                  feed.name === feedName
              )
            );
          } else {
            //DIFFERENCE FOR  TOTAL FEEDS
            prevData = sumFeedsQty(
              this.feeds.filter(
                (feed) => feed.date >= prevStartDate && feed.date <= prevEndDate
              )
            );
          }
        } else {
          if (feedName) {
            //DIFFERENCE FOR INDIVIDUAL FEEDS
            prevData = sumFeedsQty(
              this.feeds.filter(
                (feed) =>
                  feed.date === this.startDate - 1 * TOMILLISECS &&
                  feed.name === feedName
              )
            );
          } else {
            //DIFFERENCE FOR TOTAL FEEDS
            prevData = sumFeedsQty(
              this.feeds.filter(
                (feed) => feed.date === this.startDate - 1 * TOMILLISECS
              )
            );
          }
        }

        difference = currData - prevData;

        if (difference > 0) return "+ " + difference;
        if (difference < 0) return "- " + Math.abs(difference);

        return difference;
        //Yesterday
      },
    },

    updated() {
      this.feeds = this.$store.state.feeds.feeds;
      // this.durationData();
    },

    mounted() {
      // this.durationData();
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
    /* background-color: burlywood; */

    background-color: var(--lightSteelBlue);

    /* 7a541a */
  }

  .category {
    font-weight: bold;
    color: var(--black);
    text-align: left;
    text-indent: 2vw;
  }
  .net {
    /* background-color: #7a4d1a; */
    background-color: var(--primary700);
  }
  .net .category {
    /* color: #e9dede; */
    color: var(--color-background);
  }
  .category-th {
    text-align: left;
    text-indent: 2vw;
  }
  .net td {
    /* color: #e9dede; */
    color: var(--color-background);

    font-weight: 600;
  }
</style>
