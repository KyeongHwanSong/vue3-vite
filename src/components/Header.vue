<template>
	<header class="header">
		<Logo></Logo>
		<div v-for="nav in navigator" :key="nav.name" class="header__item">
			<router-link
				:to="nav.href"
				active-class="button--0070ee"
				class="header__link button button--large button--fff--outline"
			>
				{{ nav.name }}
			</router-link>
		</div>
	</header>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
	components: { Logo },
	data() {
		return {
			navigator: [
				{ name: 'Search', href: '/' },
				{ name: 'Movie', href: '/movie' },
				{ name: 'About', href: '/about' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/import.scss';
.header {
	@include flexbox($ai: center);

	&__item {
		@include flexbox($ai: center);

		padding: 10px 20px;

		.button {
			color: $color-000;
		}
	}
}
</style>
