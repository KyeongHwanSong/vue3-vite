<template>
	<Header />
	<router-view />
</template>

<script>
import Header from '~/components/Header.vue';

export default {
	components: { Header },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/import.scss';
</style>
