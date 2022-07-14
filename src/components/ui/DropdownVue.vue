<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-btn">
      <slot class="slot"></slot>
      <span @click="toggleDropdown"
        ><font-awesome-icon
          @click="toggleDropdown"
          class="icon-btn"
          icon="fa-solid fa-solid fa-circle-chevron-down"
          size="xs"
      /></span>
    </button>
    <div class="dropdown-content">
      <router-link
        class="router-link"
        v-for="link in links"
        :to="{ name: 'MonthFeeds', params: { month: link } }"
        :key="link"
      >
        {{ link }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  components: {},
  data() {
    return {};
  },
  props: {
    links: Array,
  },
  methods: {
    toggleDropdown(e) {
      e.preventDefault();

      document
        .querySelector(".dropdown-content")
        .classList.toggle("show-dropdown");
    },
    hideDropdown() {
      document
        .querySelector(".dropdown-content")
        .classList.contains("show-dropdown") &&
        document
          .querySelector(".dropdown-content")
          .classList.toggle("show-dropdown");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown-btn {
  height: 5vh;
  width: 6vw;
  font-size: 1rem;
  margin-right: -2vw;
  margin-top: 0.7vh;
  background-color: transparent;
  /* background-color: red; */
  color: var(--black);
  padding: 1vw;
  padding-bottom: 5vh;
  border-radius: 0vw;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dropdown .dropdown-btn:hover,
.icon-btn:hover {
  color: var(--accent400);
  font-weight: bold;
  cursor: pointer;
}
.icon-btn {
  margin-left: 0.3vw;
  margin-top: 0.55vh;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 12vw;
  margin-left: 0vw;
  text-indent: 1vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: 30vh;
  overflow-y: scroll;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.router-link {
  display: block;
  padding: 12px 16px;
  font-size: 1rem;
  background-color: none;
  text-decoration: none;
  color: var(--dark-grey);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.router-link:hover {
  background-color: #ddd;
}
::-webkit-scrollbar {
  width: 0.15em;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.show-dropdown {
  display: block;
}
</style>
