<template>
  <div class="title-thumbnails">
    <h2>
      {{ str1 }}<span>{{ str2 }}</span
      >{{ str3 }}
    </h2>
    <span class="date">
      <h5>{{ formatDate(startDate) }}</h5>
      <h5 v-if="this.endDate && this.endDate !== this.startDate">
        - <span style="margin-left: 1vw">{{ formatDate(endDate) }}</span>
      </h5>
    </span>
  </div>
</template>

<script>
  import TOMILLISECS from "../../../util/config.js";
  export default {
    name: "SummaryTitle",
    props: ["title", "startDate", "endDate"],
    data() {
      return {
        str1: "",
        str2: "",
        str3: "",
      };
    },
    computed: {
      dayMs() {
        return TOMILLISECS;
      },
    },
    methods: {
      formatTitle() {
        const title = this.title;

        const start = Math.trunc(title.length / 2) - 4;
        const end = Math.trunc(title.length / 2) + 5;
        const last = title.length - end;

        this.str1 = title.length < 6 ? "" : title.slice(0, start);
        this.str2 = title.length < 6 ? title : title.slice(start, end);
        this.str3 = last > 0 ? title.slice(-last) : "";
      },
      formatDate(date) {
        return new Intl.DateTimeFormat("en-GB", {
          dateStyle: "medium",
        }).format(new Date(date));
      },
    },
    mounted() {
      this.formatTitle();
    },
  };
</script>
<style scoped>
  .title-thumbnails {
    flex-basis: 100%;
    display: flex;
    margin-bottom: 0vh;
  }
  .title-thumbnails h2 {
    margin-left: 2vw;
    margin-top: 5vh;
    margin-bottom: 3vh;
    color: var(--primary700);
    font-size: 1.1rem;
    /* flex-basis: 50%; */
  }

  .title-thumbnails h2 span {
    padding-bottom: 2vh;
    /* border-bottom: 5px solid var(--primary500); */
  }
  .date {
    margin-left: 5vw;
    display: flex;
    margin-top: 5vh;
  }
  .title-thumbnails h5 {
    font-size: 0.7rem;
    color: grey;
    margin-left: 1vw;
  }
</style>
