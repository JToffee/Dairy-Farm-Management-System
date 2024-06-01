<template>
  <main class="produce">
    <div class="today-summary" v-if="this.startDate && this.endDate">
      <summary-title
          class = "title"
          title="Today's Summary"
          :startDate="startDate"
          :endDate="endDate"
        ></summary-title>

      <div class="thumbnails-container">
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

      <div class="highlights">
        <table>
          <th>Produce highlight</th>
          <th>Litres</th>
          <th>Cow name</th>
          
          <tr>
            <td>Highest</td>
            <td>45</td>
            <td>Dianna</td>
          </tr>
          <tr>
            <td>Lowest</td>
            <td>5</td>
            <td>Diddi</td>
          </tr>
          <tr>
            <td>Increase</td>
            <td>+10</td>
            <td>Lelmet</td>
          </tr>
          <tr>
            <td>Decrease</td>
            <td>-5</td>
            <td>Golle</td>
          </tr>
        </table>
      </div>
      

      <div class="per-cow">
        <h4>Pr<span>oduce by c</span>ow (KG)</h4>
        <!-- <div class="btn-container"> -->
          <!-- <button class="btn-produce" @click="cowBtnHandler" id="allproduce">
            All Cows
          </button> -->
          

          <!-- <button class="btn-produce" @click="cowBtnHandler" id="allproduce">
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
          </button> -->

        <!-- </div> -->
        <p>
          Average <br>
          <span>45.3 L</span>
        </p>
        <div class="cow-produce">
          <form>
            <select name="selectCow" id="selectCow" required onchange="cowBtnHandler">
              <option v-for="cow in cows" :key="cow.id" :value="cow.id">
                {{ cow.name }}
              </option>
            </select>
          </form>
          <table>
            <th>Morning</th>
            <th>Noon</th>
            <th>Evening</th>
            <th>Total</th>
            <th> Difference</th>
            <tr v-if="this.cowProduce">
              <td>{{ cowMorning }}</td>
              <td>{{ cowNoon }}</td>
              <td>{{ cowEvening }}</td>
              <td>{{ cowTotal }}</td>
              <td>+5</td>
            </tr>
            
            <tr v-else>
              <td>{{ morning }}</td>
              <td>{{ noon }}</td>
              <td>{{ evening }}</td>
              <td class="key-value">{{ total }}</td>
              <td>+5</td>
            </tr>
          </table>
        </div>
      </div>

    </div>

    <div class="farm-averages">
      <summary-title
          class="title"
          title="2024 Farm Averages">
        </summary-title>
      <p>
        Lactation/Cow <br>
        <span>45.3 L/d</span>
      </p>
      <p>
        Litres/Day <br>
        <span>500 L</span>
      </p>
      <p>
        Conception Rate <br>
        <span> 50% </span>
      </p>
      <p>
      MFPR <br>
        <span> 1.5</span>
      </p>
      <p>
        Feed cost/cwt <br>
        <span>54</span>
      </p>
      <p>
        Lactating DMI <br>
        <span>600</span>
      </p>
    </div>

  </main>
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
    },
    mounted() {
      this.allProduce = this.$store.state.produce.produce;
      this.cows = this.$store.state.cows;
    },
    methods: {
      //set Start date
      setStartDate() {
        return new Date(new Date().setHours(0, 0, 0, 0)).getTime();
      },

      //Filter produce by dates and get the sum
      durationData(data) {
        this.data = data || this.allProduce;

        return (
          this.data &&
          this.data.filter(
            (item) => item.date <= this.endDate && item.date >= this.startDate
          )
        );
      },
      //PRODUCE

      //filter by time helper
      getDurationTimeData(time, data, startDate, endDate) {
        return (
          data &&
          data.filter(
            (item) =>
              item.time === time &&
              item.date >= startDate &&
              item.date <= endDate
          )
        );
      },
      getDateTimeData(time, data, date) {
        return (
          data &&
          data.filter((item) => item.time === time && item.date === date)
        );
      },

      // filter produce by dates and milking time

      durationTimeData(time = null, data) {
        let timeValue = time;
        this.data = data || this.allProduce;

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
        e.target.parentNode
          .querySelector(".btn-active")
          ?.classList.remove("btn-active");

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
            new Date(new Date().setHours(0, 0, 0, 0)).getTime() -
            1 * TOMILLISECS;

          prevData = sum(this.getDateTimeData(curTime, this.data, prevDate));

          currData = sum(
            this.getDateTimeData(curTime, this.data, this.setStartDate())
          );
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
            this.getDurationTimeData(
              curTime,
              this.data,
              prevDate,
              this.startDate
            )
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
            new Date(new Date().setHours(0, 0, 0, 0)).getTime() -
            1 * TOMILLISECS;

          prevData = sum(this.data.filter((item) => item.date === prevDate));

          //current data
          // currDate = this._setStartDate();
          currData = sum(
            this.data.filter((item) => item.date === this.setStartDate())
          );
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

<style lang="scss" scoped>
.produce {
  display: flex;
  flex-wrap: wrap;
 

  .today-summary {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%; 
    margin-bottom: 10vh;
    background-color: var(--background-grey);
    padding: 1rem;

    }

    .thumbnails-container{
      display: flex;
      flex-basis: 50%;
      flex-wrap: wrap;
      overflow: hidden;
      padding: 1rem;
      justify-content: space-evenly;
      margin-left: 0;
      background-color: var(--primary600);
      

    }

    .highlights{
      flex-basis: 45%;
      display: flex;
      flex-wrap: wrap;

    }

    .per-cow{
      flex-basis: 100%;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      margin: auto;
      padding: 0;

      p{
        min-width: 3vw;
        text-align: center;
        padding: 1rem;
        background-color: var(--accent1200);
        margin-right: 1vw;

        & span {
        margin-top: 2vh;
        font-weight: 600;
        line-height: 5vh;
        font-size: 1.3rem;
        }
      }

    }

    .cow-produce {
      display: flex;
      flex-basis: 50%; 
    }

    .farm-averages{
      display: flex;
      flex-wrap: wrap;
      flex-basis: 45%;
      margin-right: 3vw;
      margin-bottom: 10vh;
      background-color: var(--background-grey);
      padding: 1rem;


      & p{
        margin: 0.1rem;
        min-width: 3vw;
        text-align: center;
        padding: 1rem;
        border-right: 1.5px solid var(--light-grey);
        

        & span {
        margin-top: 2vh;
        font-weight: 600;
        line-height: 5vh;
        font-size: 1.3rem;
        }
      }
    } 
}

.title {
    flex-basis: 100%;
    padding-left: 0;
}

h4{
  margin-bottom: 1vh;
  flex-basis: 100%;
}

table tr .key-value{
  background-color: var(--accent1200);
}
.thumbnails-container {
  
  & .thumbnail {
    background-color: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    height: 15vh;
    padding: 0;
    margin-top: 0;
    font-size: 0.88rem;
    color: var(--light-grey);


    .value-thumbnail {
      font-weight: bold;
    }
    
  } 
}

.highlights {
  
  
     table{
      padding: 0;
      padding-top: 0.3rem;
      font-size: 0.9rem;
      border-bottom: 2px solid var(--accent1200);

      
        & td{
          padding: 0.2rem;
          padding-right: 1.5rem;
          border: 1px solid var(--light-grey);
          margin: 0;
          width: fit-content;
          min-width: 10vw;
        }

        & th{
          padding-bottom: 0.1rem;
          color: var(--primary600);
          text-align: left;
          border-bottom: 2px solid var(--accent1200);
          text-indent: 0.2rem;

        }

        & tr{
        color: var(--dark-grey);
        }

        & .row-category{
          font-weight: 500;
        }

        & .last-row{
          & td{
            border-top: 1px solid var(--mid-grey);
            padding-top: 0.3rem;
          }
  }
    
    }
}

.week-summary {
  margin-bottom: 8vh;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--background-grey);
  padding: 1rem;


  & .title{
    flex-basis: 100%;
  }

  table{
    flex-basis: 55%;
    margin-right:3vw;
  }

  .pie{
    flex-basis: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img{
      width: 15rem;
    }
    h4{
      padding: 0.4rem;
      margin-bottom: 1vh;
      text-align: center;
      flex-basis: 100%;
      border-bottom: 2px solid var(--accent1200);
    }
  }
}

.week-summary table {
background-color: var(--background-grey);
border-top: 1px solid var(--light-grey);
padding: 1rem;
font-size: 1rem;

& td{
  padding-right: 1rem;
}

& th{
  padding-right: 1rem;
  padding-bottom: 1rem;
  color: var(--primary600);
}

& tr{
padding: 2rem;
color: var(--dark-grey);

}

& .row-category{
  font-weight: 500;
}

& .last-row{
  & td{
    border-top: 1px solid var(--mid-grey);
    padding-top: 0.3rem;
  }
}

}

.per-cow {

  & h4{
    flex-basis: 100%;
    padding: 0.4rem;
  }
  
  .btn-container {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    justify-content: flex-start;
    align-items: center;
    
    .btn-produce {
      width: fit-content;
      background-color: transparent;
      font-size: 0.9rem;
      color: var(--primary700);
      margin: 0;
      margin-right: 1rem;
    }

   
  }
}

.btn-active {
      background-color: transparent;
      border-bottom: 2px solid var(--accent400);
      border-radius: 0;
      padding-bottom: 0;
      
}

.cow-produce{

  form{
      padding: 0;
      width: fit-content;
      margin: 0;

      select{
      background-color: var(--primary600);
      color: var(--light-grey);
      outline: none;
      width: fit-content;
      padding: 0.3rem;
      font-size: 0.96rem;
  
      }
      
    }

  table{

    th,td {
      width: 30vw;
      padding: 0.4rem;
      text-align: left;
      border: 1px solid var(--light-grey);
      margin: 0;
    }
    td {
      color: var(--dark-grey);
      text-indent: 2vw;
    }
    th {
      color: var(--font-grey);
      font-size: 0.8rem;
    }
  }

}

.today-input {
  margin-top: 1vw;
}

</style>
