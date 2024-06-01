<template>
  <form class="search">
    <div class="form-group">
      <label for="startDate">Start date</label>
      <input type="date" v-model="startDate" @change="changeHandler" required />
    </div>
    <div class="form-group">
      <label for="endDate">End date</label>
      <input type="date" v-model="endDate" @change="changeHandler" required />
    </div>
    <button type="submit" @click="submitHandler" class="btn">
      <img src="../../assets/icons/search.png" class="icon" />
    </button>
  </form>
</template>

<script>
  export default {
    name: "DurationForm",
    data() {
      return {
        startDate: "",
        endDate: "",
      };
    },
    //  computed: {
    // 	handler() {
    // 		return this.search;
    // 	},
    // },
    methods: {
      changeHandler() {
        this.$emit("updateClicked");
      },
      submitHandler(e) {
        e.preventDefault();
        console.log(this.startDate, this.endDate);

        //update state
        this.$store.dispatch("setStartDate", this.startDate.trim());
        this.$store.dispatch("setEndDate", this.endDate.trim());

        this.$emit("submitHandler");

        // this.startDate && this.endDate && this.$store.dispatch("setClicked");
      },
    },
  };
</script>

<style scoped>
  .search {
    width: 80%;
    display: flex;
    /* align-items: center; */
    justify-content: flex-start;
    margin: auto;
    margin-top: 10vh;
    height: 10vh;
    border-bottom: var(--light-grey) solid 0.5px;
    margin-bottom: 3vh;
    padding: 30px;
    padding-top: 20px;
    background-color: var(--color-background);
  }
  .search input {
    padding: 1vh 1vw;
    text-indent: 0;
    font-size: 0.9rem;
    outline: none;
    border: none;
    border-radius: 1vw;
    margin-left: -1vw;
    border-left: var(--mid-grey) solid 0.5px;
  }
  .search .form-group {
    display: flex;
    margin: 0;
    margin-top: 1vw;
    margin-left: 2vw;
    padding: 0;
    justify-content: center;
    max-width: 30%;
  }
  .search label {
    width: fit-content;
    min-width: 7vw;
    line-height: -0.5;
    color: var(--primary400);
    font-size: 1rem;
    font-weight: 400;
  }
  .search .btn {
    width: 2vw;
    background: transparent;
    margin-left: 1vw;
  }
  .btn img {
    width: 1.2vw;
    height: 1.2vw;
  }
  .search .btn:hover {
    background-color: transparent;
    opacity: 0.6;
    /* padding-right: 3vw; */
  }
</style>
