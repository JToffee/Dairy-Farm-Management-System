<template>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
  import Footer from "./components/ui/FooterVue.vue";
  export default {
    name: "App",
    components: { Footer },
    data: () => ({
      //
    }),

    computed: {
      counter() {
        return this.$store.state.counter;
      },
    },
    methods: {
      increment() {
        this.$store.dispatch("increment");
      },
      decrement() {
        this.$store.dispatch("decrement");
      },
    },
  };
</script>
<style>
  :root {
    --color-background: #f5fbfc;
    --primary200: #99b6ce;
    --primary300: #30def5;
    --primary500: #1f9bb1;
    --primary400: #2a8ddd;
    --primary600: #133b5c;
    --primary800: #092841;
    --primary700: #06424b;
    /* --accent200: #e5c7b1; */
    --accent200: #b6594c;
    --accent300: #db3f4c;
    --accent400: #e74a2ed3;
    --accent100: #f88570d3;
    --black: black;
    --white: #ffffff;
    --dark-grey: #464541;
    --mid-grey: #8a8585;
    --light-grey: #f5f0f0;
    --lightSteelBlue: #b0c4de;
    --borderGrey: #d4d0d0;
    --shadow-grey: #c1c8ce;
  }

  html {
    scroll-behavior: smooth;
  }
  #app {
    background-color: var(--color-background);
    scroll-behavior: smooth;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
      Arial, sans-serif;
    overflow-x: hidden;
  }
  body {
    background-color: var(--color-background);
    scroll-behavior: smooth;
    margin: 0;
  }

  .container {
    font-family: "Roboto", sans-serif;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.5vw;
  }
  .thumbnails-container {
    width: 80vw;
    margin: auto;
    display: flex;
    overflow-x: hidden;
    flex-wrap: wrap;
    background-color: var(--white);
    padding-bottom: 10vh;
    border: 0.1px solid rgb(233, 229, 229);
  }
  .thumbnail--active {
    color: #fff;
    background-color: var(--accent400);
  }
  .thumbnail--active .value-thumbnail {
    background-color: var(--dark-grey);
  }

  .sub-value-thumbnail {
    background-color: var(--light-grey);
    width: fit-content;
    padding: 1vw;
    color: var(--dark-grey);
  }
  /* FORMS */
  form {
    border: 1px solid var(--light-grey);
  }

  .form h2 {
    margin-bottom: 8vh;
    margin-left: 30%;
    font-size: 3vw;
    flex-basis: 100%;
    color: #000;
  }
  form h2 span {
    padding-bottom: 2vh;
    border-bottom: 5px solid var(--primary500);
  }
  .form-group {
    padding: 1vw;
    min-height: 5vh;
    flex-basis: 80%;
    margin: auto;
    font-size: 1.7rem;
  }
  .form-group label {
    color: #d8dde0;
    color: var(--dark-grey);
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
    color: #000;
    background-color: var(--white);
    outline: none;
    border: 1px solid var(--light-grey);
  }
  .form-group select {
    height: 6vh;
    width: 20vw;
    font-size: 1rem;
    text-indent: 1vw;
    color: #000;
    background-color: var(--white);
  }
  button {
    width: 12vw;
    padding: 0.7vw;
    font-size: 1.5rem;
    margin-left: 20%;
    background-color: var(--accent400);
    color: var(--white);
    border: none;
    /* border: 1px solid var(--accent400); */
    border-radius: 1vw;
  }
  .form-group button:hover {
    background-color: var(--primary400);
  }

  .custom-period {
    min-height: 80vh;
  }
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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

  .icon {
    width: 2vw;
    height: 2vw;
  }
  .move-to-top {
    position: absolute;
    top: 15vh;
    width: 70%;
  }
  .custom-display {
    position: absolute;
    top: 35vh;
    left: 10%;
  }
  .move-to-bottom {
    position: absolute;
    top: 130vh;
    left: 5vw;
  }
  .remove-footer {
    display: none;
  }
</style>
