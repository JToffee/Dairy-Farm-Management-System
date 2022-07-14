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
	name: "NavbarSales",
	props: {
		links: Array,
	},
};
</script>

<style scoped>
.nav {
	flex-basis: 15%;
	display: flex;
	margin-top: 25vh;
	justify-content: center;
	/* background-color: red; */
}
.nav ul {
	margin-top: 10vh;
	flex-basis: 100%;
	flex-wrap: wrap;
	/* background-color: blue; */
	height: fit-content;
	display: flex;
}
.nav ul li {
	display: inline;
	margin-top: 1vh;
	flex-basis: 100%;
	/* background-color: olive; */
}
.router-link {
	text-decoration: none;
	color: var(--black);
	font-size: 1rem;
	padding: 1vw 2vw;
	border-radius: 0vw;
	font-weight: 400;
	background-color: none;
}
.nav ul li :hover {
	/* color: var(--primary400); */
	color: var(--accent400);

	/* color: var(--white); */
}
/* .nav ul li :active {
	color: var(--white);
	background-color: var(--primary300);
} */
.router-link-active,
.router-link-active {
	/* background: var(--accent400); */
	color: var(--primary400);
}

.nav .sticky {
	position: fixed;
	background-color: rgba(255, 255, 255, 0.95);
}
</style>
