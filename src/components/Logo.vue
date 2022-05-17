<template>
	<router-link to="/" class="logo">
		<span class="logo__text">OMDbApi</span>
		.com
	</router-link>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/import.scss';
.logo {
	font-size: 20px;
	color: $color-000;

	&:hover {
		color: inherit;
		text-decoration: underline;
	}

	&__text {
		color: $color-ffc800;
	}
}
</style>
