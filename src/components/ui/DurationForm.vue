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
    <div class="form-group">
      <button type="submit" @click="submitHandler" class="btn">
        <img src="../../assets/icons/search.png" class="icon" />
      </button>
    </div>
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

<style>
.search {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 5vh;
  padding-bottom: 1.5vh;
  height: 10vh;
  /* border: var(--primary800) solid 1px; */
  margin-bottom: 5vh;
  /* background-color: red; */
}
.search .input {
  padding: 2vh 1vw;
  text-indent: 0;
  font-size: 0.9rem;
}
.search .form-group {
  display: flex;
  margin: 0;
  margin-top: 1vw;
  margin-left: 4vw;
  padding: 0;
  justify-content: center;
  flex-basis: 30%;
}
.search label {
  width: fit-content;
  min-width: 8vw;
  line-height: 1;
  color: grey;
  font-size: 1rem;
}
.search .btn {
  margin-left: -6vw;
  width: 3vw;
  padding: 0.5vh 0.5vh 0.1vh 0.1vh;
  background-color: transparent;
}
.search .btn:hover {
  background-color: transparent;
  opacity: 0.6;
  /* padding-right: 3vw; */
}
</style>
