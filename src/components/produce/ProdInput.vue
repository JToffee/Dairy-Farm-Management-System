<template>
  <div>
    <navbar-vue
      :links="['new', 'today', 'week', 'month', 'customperiod', 'sales']"
    ></navbar-vue>
    <div id="forms-input">
      <form id="input-form" @submit="addProduce">
        <h2>Inp<span>ut pro</span>duce</h2>
        <div class="form-group">
          <label for="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder=""
            v-model="dateValue"
          />
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <select id="time" name="time" value="time" required>
            <option id="time" name="time" :value="hour">
              {{ hour.charAt(0).toUpperCase() + hour.slice(1) }}
            </option>
            <option id="time" name="time" value="morning">Morning</option>
            <option id="time" name="time" value="noon">Noon</option>
            <option id="time" name="time" value="evening">Evening</option>
          </select>
        </div>
        <div class="form-group">
          <label for="selcetCow">Cow </label>
          <select name="selectCow" id="selectCow" required>
            <option v-for="cow in cows" :key="cow.id" :value="cow.id">
              {{ cow.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="quantity">Quantity (KG)</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            steps="0.01"
            placeholder="300"
            required
            v-model="qty"
          />
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../ui/NavbarVue.vue";

export default {
  name: "ProdInput",
  components: { NavbarVue },
  computed: {
    cows() {
      return this.$store.getters.getCows;
    },
    hour() {
      return this.$store.getters.getHour;
    },
  },
  data() {
    return {
      qty: "",
      dateValue: new Date().toISOString().substring(0, 10),
    };
  },
  methods: {
    addProduce(e) {
      e.preventDefault();
      console.log(e.target);
      const dataArray = [...new FormData(e.target)];
      const data = Object.fromEntries(dataArray);

      this.$store.dispatch("addProduce", data);
      this.qty = "";
      this.dateValue = new Date().toISOString().substring(0, 10);
    },
  },

  mounted() {
    this.$store.dispatch("setTime");
  },
};
</script>

<style scoped>
form {
  background-color: var(--primary600);
  padding-bottom: 5vh;
}
.form-group {
  padding: 2vw;
  min-height: 5vh;
  flex-basis: 100%;
  margin-left: 5vw;
}
.form-group label {
  color: #d8dde0;
  padding: 1vw;
  float: left;
  margin-top: -1vh;
  width: 17vw;
  font-size: 1.3rem;
}
.form-group input {
  height: 5vh;
  width: 12vw;
  font-size: 1rem;
  text-indent: 1vw;
  color: #464541;
  background-color: var(--white);
}
.form-group select {
  height: 6vh;
  width: 20vw;
  font-size: 1rem;
  text-indent: 1vw;
  color: #464541;
  background-color: var(--white);
}
.form-group {
  font-size: 1.7rem;
  /* background-color: var(--color--bcg-1); */
}
button {
  width: 12vw;
  padding: 0.7vw;
  font-size: 1rem;
  margin-left: 30%;
  background-color: var(--primary400);
  color: var(--white);
  border: none;
  /* border: 1px solid var(--accent400); */
  border-radius: 1vw;
}
.form-group button:hover {
  background-color: var(--accent400);
}

#forms-input {
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  min-height: 50vh;
  margin-left: 25vw;
  margin-top: 10vh;
}
#input-form {
  background-color: var(--primary700);
  padding-right: 5vw;
  padding-top: 5vh;
}

#forms-input h2 span {
  padding-bottom: 2vh;
  border-bottom: 5px solid var(--primary300);
}

/* form #input-form {
	display: flex;
	flex-wrap: wrap;
	/* background-color: #1f9bb1; */
/* width: 70vw;
	min-height: 50vh;
	margin: auto;
	margin-top: 10vh;
} */
#forms-input h2 {
  margin-bottom: 8vh;
  margin-left: 30%;
  font-size: 3vw;
  flex-basis: 100%;
  color: #d8dde0;
}
</style>
