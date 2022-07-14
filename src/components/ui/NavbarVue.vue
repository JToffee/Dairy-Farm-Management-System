<template>
  <nav class="nav">
    <ul>
      <li v-for="link in links" :key="link">
        <router-link class="router-link" :to="link" :id="link">
          {{ link.charAt(0).toUpperCase() + link.slice(1) }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavbarVue",
  props: {
    links: Array,
  },
};
</script>
<style scoped>
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
  color: var(--black);
  font-size: 1rem;
  padding: 1vw 1vw;
  border-radius: 0vw;

  background-color: none;
}
.nav ul li :hover {
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
  color: var(--primary400);
}

.nav .sticky {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.95);
}
</style>
