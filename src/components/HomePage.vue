<template>
  <div class="container">
    <div class="background">
      <header class="header">
        <nav class="nav">
          <ul>
            <li v-for="link in links" :key="link">
              <router-link class="router-link" :to="link">
                {{ link.charAt(0).toUpperCase() + link.slice(1) }}</router-link
              >
            </li>
          </ul>
        </nav>

        <banner-vue></banner-vue>
      </header>
    </div>
    <GeneralSummary class="summary"></GeneralSummary>
  </div>
</template>

<script>
  import GeneralSummary from "./GeneralSummary.vue";
  import BannerVue from "./ui/BannerVue.vue";

  export default {
    name: "HomePage",
    components: { GeneralSummary, BannerVue },
    data() {
      return {
        links: ["Feeds", "Produce", "Sales", "Expenses"],
      };
    },
  };
</script>

<style scoped>
  .background {
    /* background-image: url("../assets/images/farm.jpg"); */
    background-color: var(--primary700);
    background-size: cover;
    background-position: center;
  }

  .header {
    width: 100vw;
    height: fit-content;
    padding-top: 1vw;
    padding-bottom: 0;
    /* background-color: var(--black); */
    opacity: 0.9;

    /* background: 50%-transparent; */
  }

  .nav {
    width: 100vw;
    height: 6vh;
    display: flex;
    margin-top: 1vh;
    justify-content: flex-end;
  }
  .nav ul {
    margin-right: 10vw;
    margin-top: 1.5vh;
  }
  .nav ul li {
    display: inline;
    margin-right: 0.2vw;
  }
  .router-link {
    text-decoration: none;
    color: var(--light-grey);
    font-size: 1rem;
    padding: 1vw 1vw;
    border-radius: 0vw;
    font-weight: 400;
    background-color: none;
  }
  .nav ul li :hover {
    color: var(--accent100);
    font-weight: bold;
    /* color: var(--white); */
  }
  /* .nav ul li :active {
	color: var(--white);
	background-color: var(--primary300);
} */
  .router-link-active,
  .router-link-active {
    /* background: var(--accent400); */
    /* color: var(--accent400); */
    color: var(--primary400);
  }

  .nav .sticky {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.95);
  }

  .summary {
    margin-top: -10vh;
    z-index: 1;
  }
</style>
