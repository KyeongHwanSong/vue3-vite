<template>
	<div class="inner">
		<h2 class="title-sub">
			<span class="title-sub__text">OMDb API</span>
			<br />
			<span>
				The Open
				<br />
				Movie Database
			</span>
		</h2>

		<p class="text-sub">
			The OMDb API is a RESTful web service to obtain movie information,
			all content and images on the site are contributed and maintained by
			our users. If you find this service useful, please consider making a
			one-time donation or become a patron.
		</p>
	</div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/import.scss';

.inner {
	max-width: 1320px;
	margin: 0 auto;
	padding-top: rem(40);
}
.title-sub {
	@include font($fs: #{rem(80)}, $lh: 1, $co: $color-000);

	&__text {
		color: $color-ffc800;
	}
}

.text-sub {
	@include font($fs: #{rem(30)}, $lh: 1.4, $co: $color-666);

	margin: rem(30) 0;
}
</style>
