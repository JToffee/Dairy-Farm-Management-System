<template>
  <nav class="nav">
    <ul>
      <li v-for="link in links" :key="link">
        <router-link
          class="router-link"
          :to="{
            name: this.section + this.trim(link).toLowerCase(),
            params: { link: this.trim(link) },
          }"
        >
          {{ link.charAt(0).toUpperCase() + link.slice(1) }}</router-link
        >
      </li>
    </ul>
    <dropdown-vue
      class="dropdown"
      :items="['home', 'sales', 'produce', 'feeds', 'expenses']"
      >Go to</dropdown-vue
    >
  </nav>
</template>
<script>
  // :to="{ params: { link: link.toString().replace(/ /g, ''), section: section } }"
  import DropdownVue from "./DropdownVue.vue";
  export default {
    name: "NavbarVue",
    components: {
      DropdownVue,
    },
    props: {
      links: Array,
      section: String,
    },
    methods: {
      duration(link) {
        let days = 0;

        if (link === "week") days = 7;
        if (link === "month") days = 30;

        return days;
      },
      trim(link) {
        if (link.toString().includes(" ")) {
          return link.toString().replace(/ /g, "");
        } else {
          return link;
        }
      },
    },

    updated() {},
  };
</script>
<style scoped>
  .dropdown {
    margin-top: -1vh;
    margin-left: -1.5vw;
  }
  .nav {
    width: 85vw;
    height: 6vh;
    display: flex;
    margin-top: 1vh;
    justify-content: flex-end;
    margin-right: 15vw;
  }
  .nav ul {
    margin-right: 1vw;
    margin-top: 1.5vh;
  }
  .nav ul li {
    display: inline;
    margin-right: 0.2vw;
  }
  .router-link {
    text-decoration: none;
    color: var(--black);
    font-size: 1rem;
    padding: 1vw 1vw;
    border-radius: 0vw;

    background-color: none;
  }
  .nav ul li a:hover {
    color: var(--accent400);
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
    color: var(--accent400);
    font-weight: bold;
  }

  .nav .sticky {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.95);
  }
</style>
