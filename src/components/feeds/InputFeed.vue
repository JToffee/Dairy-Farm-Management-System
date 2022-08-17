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
    <div id="forms-input">
      <form id="input-form" @submit="addFeed">
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
  import NavbarVue from "../ui/NavbarVue.vue";
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
  form {
    background-color: var(--primary600);
    padding-bottom: 5vh;
    width: 80vw;
  }
  #forms-input {
    display: flex;
    flex-wrap: wrap;
    min-height: 50vh;
    justify-content: center;
    margin-top: 20vh;
  }
  #input-form {
    background-color: var(--primary700);

    padding-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .form-group {
    min-height: 5vh;
    flex-basis: 40%;
    margin: 1vw;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding: 1vw;
    /* background: #ddd; */
  }
  .form-group label {
    flex-basis: 100%;
    color: #d8dde0;
    padding: 1vw;
    float: left;
    margin-top: -1vh;
    font-size: 1.3rem;
  }
  .form-group input {
    height: 7vh;
    font-size: 1rem;
    text-indent: 1vw;
    color: #464541;
    background-color: var(--white);
    flex-basis: 80%;
  }
  .form-group select {
    flex-basis: 80%;
    height: 8vh;
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

  #forms-input h2 span {
    padding-bottom: 2vh;
    border-bottom: 5px solid var(--primary300);
  }

  #forms-input h2 {
    margin-bottom: 8vh;
    margin-left: 30%;
    font-size: 3vw;
    flex-basis: 100%;
    color: #d8dde0;
  }
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 0;
  }
  /* .dropdown {
    /* margin-right: -3vw; */
  .navbar {
    flex-basis: 30%;
  }
  .dropdown {
    margin-right: -2vw;
  }
</style>
