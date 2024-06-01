<template>
	<aside :class="`${this.isExpanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="this.logoURL" alt="Vue" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle"  @mouseover="ToggleMenu">
				<span class="material-symbols-outlined">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="menu-item">
				<span class="material-symbols-outlined">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/produce" class="menu-item">
				<span class="material-symbols-outlined">grocery</span>
				<span class="text">Produce</span>
			</router-link>
			<router-link to="/sales" class="menu-item">
				<span class="material-symbols-outlined">paid</span>
				<span class="text">Sales</span>
			</router-link>
			<router-link to="/feeds" class="menu-item">
				<span class="material-symbols-outlined">grass</span>
				<span class="text">Feeds</span>
			</router-link>
			<router-link to="/expenses" class="menu-item">
				<span class="material-symbols-outlined">shopping_cart</span>
				<span class="text">Expenses</span>
			</router-link>
			<router-link to="/" class="menu-item">
				<span class="material-symbols-outlined">folder</span>
				<span class="text">Herd management</span>
			</router-link>
			<router-link to="/" class="menu-item">
				<span class="material-symbols-outlined">group</span>
				<span class="text">Employees</span>
			</router-link>
			<router-link to="/" class="menu-item">
				<span class="material-symbols-outlined">email</span>
				<span class="text">Contact</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="menu-item">
				<span class="material-symbols-outlined">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script>
import logoURL from '../assets/logo.png';
export default {
    name: "SidebarVue",
    data (){
        return{
			logoURL: logoURL,
        } 
    },
	computed: {
		isExpanded (){
			return this.$store.state.isExpanded
		}
	},
    methods: {
        ToggleMenu(){
            this.$store.dispatch('setIsExpanded')
        },
		ToggleMenuHover(){
			setTimeout(this.ToggleMenu, 300)
		}
    }
}
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;

	background-color: var(--primary700);
	color: var(--light-grey);

	width: calc(2rem + 32px);
	width: 70px;
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
		margin: 0;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	button {
		width: 2rem;
		padding: 0;
		font-size: 1rem;
		margin-left: auto;
		background-color: transparent;
		color: var(--light-grey);
		border: none;
		border-radius: 0;
  }
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 2rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		width: 2rem;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-symbols-outlined {
				font-size: 1.5rem;
				color: var(--light-grey);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-symbols-outlined {
					color: var(--accent400);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .menu-item .text {
		display: none;
		transition: 0.3s ease-in-out;
	}

	h3 {
		color: var(--mid-grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		

		.menu-item {
			display: flex;
			align-items: center;
			text-decoration: none;
			flex-basis: 100%;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-symbols-outlined {
				font-size: 1.7rem;
				color: var(--light-grey);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light-grey);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: var(--primary600);

				.material-symbols-outlined, .text {
					color: var(--accent400);
				}
			}

			&.router-link-exact-active {
				background-color: var(--primary600);
				border-right: 5px solid var(--accent400);

				.material-symbols-outlined, .text {
					color: var(--accent400);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			left: 230px;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .menu-item .text {
			display: flex;
		}

		.menu-item {
			padding: 0.5rem 1rem;

			.material-symbols-outlined {
				margin-right: 1rem;
				
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>