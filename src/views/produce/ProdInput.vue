<template>
  <div>
    <div class="menu">
      <navbar-vue
        section="produce"
        :links="['new', 'today', 'Past week', 'Past month', 'Choose period']"
      ></navbar-vue>
    </div>
    <div class="forms-input">
      <form @submit="addProduce">
        <h2>In<span>put produ</span>ce</h2>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" name="date" id="date" placeholder="" v-model="dateValue" />
        </div>
        <div class="form-group">
          <label for="time">Milking time</label>
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
          <label for="selcetCow">Cow name</label>
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
  import NavbarVue from "../ui/Navbar.vue";

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
.menu{
  justify-content: center;
}
  .forms-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 50vh;
    margin: auto;
    margin-top: 10vh;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--white);
    padding-right: 5vw;
    padding-top: 5vh;
    margin: auto;
    width: 80%;
  }
  .forms-input h2 {
    margin-bottom: 8vh;
    margin-left: 30%;
    font-size: 3vw;
    flex-basis: 100%;
    color: #000;
  }
  .forms-input h2 span {
    padding-bottom: 2vh;
    border-bottom: 5px solid var(--primary500);
  }
  .form-group label {
    width: 13vw;
  }
  .form-group input {
    height: 5vh;
    width: 20vw;
  }
  button {
    font-size: 1rem;
    margin-left: 30%;
  }
</style>
