<template>
  <div class="produce">
    <div class="produce-summary" v-if="this.startDate && this.endDate">
      <div class="thumbnails-container today-input">
        <summary-title
          title="Summary"
          :startDate="startDate"
          :endDate="endDate"
        ></summary-title>
        <thumbnail-vue
          title="Morning"
          :value="morning"
          unit="KG"
          :difference="morningDifference"
        ></thumbnail-vue>
        <thumbnail-vue
          title="Noon"
          :value="noon"
          unit="KG"
          :difference="noonDifference"
          valueClass="thumbnail--active .value-thumbnail"
        ></thumbnail-vue>
        <thumbnail-vue
          title="Evening"
          :value="evening"
          unit="KG"
          :difference="eveningDifference"
        ></thumbnail-vue>
        <thumbnail-vue
          title="Total"
          :value="total"
          unit="KG"
          :difference="totalDifference"
          class="thumbnail--active"
        ></thumbnail-vue>
      </div>
    </div>
    <div class="per-cow">
      <div class="btn-container">
        <button class="btn-produce" @click="cowBtnHandler" id="allproduce">
          All Cows
        </button>
        <button
          @click="cowBtnHandler"
          v-for="cow in cows"
          :key="cow.id"
          class="btn-produce"
          :id="cow.id"
        >
          {{ cow.name }}
        </button>
      </div>
      <div class="cow-produce">
        <table>
          <th>Morning</th>
          <th>Noon</th>
          <th>Evening</th>
          <th>Total</th>
          <tr v-if="this.cowProduce">
            <td>{{ cowMorning }}</td>
            <td>{{ cowNoon }}</td>
            <td>{{ cowEvening }}</td>
            <td>{{ cowTotal }}</td>
          </tr>
          <tr v-else>
            <td>{{ morning }}</td>
            <td>{{ noon }}</td>
            <td>{{ evening }}</td>
            <td>{{ total }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { sum } from "../../util/helpers.js";
  import { TOMILLISECS } from "../../util/config.js";
  import SummaryTitle from "../ui/summary/SummaryTitle.vue";
  import ThumbnailVue from "../ui/summary/ThumbnailVue.vue";

  export default {
    name: "ProduceSummary",
    components: { SummaryTitle, ThumbnailVue },
    props: { period: Number },

    data() {
      return {
        allProduce: this.$store.state.produce.produce,
        cows: this.$store.state.cows,
        data: [],
        cowProduce: "",
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
      total() {
        return sum(this.durationData());
      },
      totalDifference() {
        return this.differenceOfSum();
      },
      morning() {
        return sum(this.durationTimeData("morning"));
      },
      morningDifference() {
        return this.differenceByTime("morning");
      },
      noon() {
        return sum(this.durationTimeData("noon"));
      },
      noonDifference() {
        return this.differenceByTime("noon");
      },
      evening() {
        return sum(this.durationTimeData("evening"));
      },
      eveningDifference() {
        return this.differenceByTime("evening");
      },
      cowMorning() {
        return sum(this.durationTimeData("morning", this.cowProduce));
      },
      cowNoon() {
        return sum(this.durationTimeData("noon", this.cowProduce));
      },
      cowEvening() {
        return sum(this.durationTimeData("evening", this.cowProduce));
      },
      cowTotal() {
        return sum(this.durationData(this.cowProduce));
      },
    },
    updated() {
      this.allProduce = this.$store.state.produce.produce;
      this.cows = this.$store.state.cows;
      this.days = this.period;
    },
    methods: {
      //set Start date
      setStartDate() {
        // const milliseconds = this.days * TOMILLISECS;
        // this.startDate =
        // 	new Date(new Date().setHours(0, 0, 0, 0)).getTime() - milliseconds;

        return new Date(new Date().setHours(0, 0, 0, 0)).getTime();
      },

      //Filter produce by dates and get the sum
      durationData(data) {
        this.data = data || this.allProduce;

        // if (!this.startDate) this.startDate = this.setStartDate();
        // if (!this.endDate) this.endDate = new Date().getTime();
        const newData =
          this.data &&
          this.data.filter(
            (item) => item.date <= this.endDate && item.date >= this.startDate
          );

        return newData;
      },
      //PRODUCE

      //filter by time helper
      getDurationTimeData(time, data, startDate, endDate) {
        return (
          data &&
          data.filter(
            (item) => item.time === time && item.date <= endDate && item.date >= startDate
          )
        );
      },
      getDateTimeData(time, data, date) {
        return data && data.filter((item) => item.time === time && item.date === date);
      },

      // filter produce by dates and milking time

      durationTimeData(time = null, data) {
        let timeValue = time;
        this.data = data || this.allProduce;
        // if (!this.startDate) this.startDate = this.setStartDate();
        // if (!this.endDate) this.endDate = new Date().getTime();

        const newData = this.getDurationTimeData(
          timeValue,
          this.data,
          this.startDate,
          this.endDate
        );

        return newData;
      },

      //PER COW PRODUCE
      cowBtnHandler(e) {
        e.preventDefault();
        e.target.parentNode.querySelector(".btn-active")?.classList.remove("btn-active");

        this.cowProduce = this.$store.getters.getCowProduce(e.target.id);
        e.target.classList.add("btn-active");
      },

      differenceByTime(time = null, data) {
        let prevDate;
        let prevData;
        let currData;
        this.data = data || this.allProduce;
        let curTime = time;

        // todays value - yesterdays value
        //days = 0
        if (this.days === 0) {
          //previous data

          prevDate =
            new Date(new Date().setHours(0, 0, 0, 0)).getTime() - 1 * TOMILLISECS;

          prevData = sum(this.getDateTimeData(curTime, this.data, prevDate));

          currData = sum(this.getDateTimeData(curTime, this.data, this.setStartDate()));
        } else {
          prevDate = this.startDate - this.days * TOMILLISECS;

          currData = sum(
            this.getDurationTimeData(
              curTime,
              this.data,
              this.startDate,
              this.setStartDate()
            )
          );

          prevData = sum(
            this.getDurationTimeData(curTime, this.data, prevDate, this.startDate)
          );
        }

        let difference = currData - prevData;

        if (difference > 0) return "+ " + difference;
        if (difference < 0) return "- " + Math.abs(difference);

        return difference;
      },
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

          prevData = sum(this.data.filter((item) => item.date === prevDate));

          //current data
          // currDate = this._setStartDate();
          currData = sum(this.data.filter((item) => item.date === this.setStartDate()));
        } else {
          currData = sum(this.durationData());

          prevDate = this.startDate - this.days * TOMILLISECS;

          prevData = sum(
            this.data.filter(
              (item) => item.date <= this.startDate && item.date >= prevDate
            )
          );
        }

        let difference = currData - prevData;

        if (difference > 0) return "+ " + difference;
        if (difference < 0) return "- " + Math.abs(difference);

        return difference;
      },
    },
  };
</script>
<style scoped>
  .produce-summary {
    margin-top: 3vw;
  }
  .value-thumbnail {
    /* border: 1px solid #092841; */
    /* background-color: var(--color-bcg-7); */
    background-color: var(--primary500);
    width: fit-content;
    padding: 1vw;
    font-size: 1.5vw;
  }
  .thumbnail {
    background-color: var(--primary700);
  }
  .thumbnail--active {
    color: #fff;
    background-color: var(--accent400);
  }
  .per-cow {
    display: flex;
    flex-wrap: wrap;
    max-width: 80vw;
    margin: 10vh 15vw;
  }
  .btn-produce {
    margin: 1vw;
    width: fit-content;
    min-width: 5vw;
    background-color: #d9e3eb;
    font-size: 1rem;
    color: #464541;
  }
  .btn-active {
    /* background-color: var(--accent300); */
    color: var(--black);
    padding: 0.5vw;
    background-color: #ddd;
    border-bottom: solid 1px var(--primary300);
    border-radius: 1vw;
  }
  .today-input {
    margin-top: 1vw;
  }
  .cow-produce {
    display: flex;
    margin: 5vh 5vw;
  }
  .cow-produce th,
  td {
    width: 30vw;
    padding: 1vw;
    text-align: left;
  }
  .cow-produce td {
    background-color: var(--primary700);
    color: #d8dde0;
    text-indent: 2vw;
  }
  .cow-produce th {
    color: #737b7c;
  }
</style>
