<template>
  <div>
    <div class="menu">
      <navbar-vue
        section="sales"
        :links="['new', 'today', 'Past week', 'Past month', 'Choose period']"
      ></navbar-vue>
    </div>
    <div class="forms-input">
      <form @submit="addSale">
        <h2>In<span>put Sal</span>e</h2>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" name="date" id="date" placeholder="" v-model="dateValue" />
        </div>
        <div class="form-group">
          <label for="category">Category </label>
          <select name="category" id="category" required>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category.slice(0, 1).toUpperCase() + category.slice(1) }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="quantity">Quantity (Litres)</label>
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

  import { saleCategories } from "../../util/config";
  export default {
    name: "InputSale",
    components: { NavbarVue },
    computed: {
      hour() {
        return this.$store.getters.getHour;
      },
    },
    data() {
      return {
        qty: "",
        categories: saleCategories,
        dateValue: new Date().toISOString().substring(0, 10),
      };
    },
    methods: {
      addSale(e) {
        e.preventDefault();
        console.log(e.target);
        const dataArray = [...new FormData(e.target)];
        const data = Object.fromEntries(dataArray);

        this.$store.dispatch("addSale", data);
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
