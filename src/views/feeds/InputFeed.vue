<template>
  <div>
    <div class="menu">
      <dropdown-vue class="dropdown" :links="this.months">Month</dropdown-vue>
      <navbar-vue
        section="feeds"
        :links="['new', 'today', 'choose period']"
        class="navbar"
      ></navbar-vue>
    </div>
    <div class="forms-input">
      <form @submit="addFeed">
        <h2>In<span>put fee</span>d</h2>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" name="date" id="date" placeholder="" v-model="dateValue" />
        </div>
        <div class="form-group">
          <label for="feedType">Feed type</label>
          <select id="feedType" name="feedType" required>
            <option value="Caliandra">Caliandra</option>
            <option value="Yeast">Yeast</option>
          </select>
          <!-- <input type="text" name="feedName" placeholder="Wheat" required /> -->
        </div>
        <div class="form-group">
          <label for="unitName">Unit name</label>
          <select id="unitName" name="unitName" required>
            <option value="KG">KG</option>
            <option value="LITRE">LITRE</option>
          </select>
        </div>
        <div class="form-group">
          <label for="packagingSize">Packaging size </label>
          <input
            type="number"
            name="packagingSize"
            steps="0.01"
            placeholder="5"
            v-model="size"
            required
          />
        </div>

        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            steps="0"
            placeholder="5"
            required
            v-model="qty"
          />
        </div>
        <div class="form-group">
          <label for="unitprice">Unit Price</label>
          <input
            type="number"
            id="unitprice"
            name="unitprice"
            steps="0.01"
            placeholder="300"
            v-model="price"
            required
          />
        </div>
        <div class="form-group" style="flex-basis: 100%">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import NavbarVue from "../ui/Navbar.vue";
  import DropdownVue from "../ui/DropdownVue.vue";
  import { allMonths } from "../../util/helpers.js";

  export default {
    name: "ProdInput",
    components: { NavbarVue, DropdownVue },
    computed: {
      months() {
        return allMonths();
      },
    },
    data() {
      return {
        qty: "",
        price: "",
        size: "",
        dateValue: new Date().toISOString().substring(0, 10),
      };
    },
    methods: {
      addFeed(e) {
        e.preventDefault();

        const dataArray = [...new FormData(e.target)];
        const data = Object.fromEntries(dataArray);

        this.$store.dispatch("addFeed", data);
        this.qty = "";
        this.price = "";
        this.size = "";
        this.this.dateValue = new Date().toISOString().substring(0, 10);
      },
    },
  };
</script>

<style scoped>
  .forms-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 50vh;
    margin: auto;
    margin-top: 10vh;
    width: 90%;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--white);
    padding-top: 5vh;
    margin: auto;
    width: 100%;
    padding: 0;
    margin-right: 0;
    padding-bottom: 5vh;
  }
  .form-group {
    flex-basis: 45%;
  }
  .forms-input h2 {
    margin-bottom: 8vh;
    font-size: 3vw;
    flex-basis: 100%;
    margin-left: 0;
    color: #000;
    text-align: center;
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
    margin-left: 43%;
  }
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 4vh;
  }
  /* .dropdown {
  /* margin-right: -3vw; */
  .navbar {
    flex-basis: 30%;
  }
  .dropdown {
    margin-top: 0;
    margin-right: -2.2vw;
  }
</style>
