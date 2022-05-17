<template>
	<div class="search-bar">
		<input
			type="text"
			v-model="title"
			class="form-input"
			placeholder="Search for Movies, Series &amp; more "
			@keyup.enter="apply"
		/>
		<div class="search-bar__selects">
			<select
				v-for="filter in filters"
				:key="filter.name"
				v-model="$data[filter.name]"
				name=""
				id=""
				class="search-bar__select"
			>
				<option v-if="filter.name === 'year'" value="">
					All Years
				</option>
				<option v-for="item in filter.items" :key="item">
					{{ item }}
				</option>
			</select>
		</div>

		<button
			class="button button--large button--0070ee _w120"
			@click="apply"
		>
			apply
		</button>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			title: '',
			type: 'movie',
			number: 10,
			year: '',
			filters: [
				{ name: 'type', items: ['movie', 'series', 'episode'] },
				{ name: 'number', items: ['10', '20', '30'] },
				{
					name: 'year',
					items: (() => {
						const years = [];
						const thisYear = new Date().getFullYear();

						for (let i = thisYear; i >= 1985; i -= 1) {
							years.push(i);
						}

						return years;
					})(),
				},
			],
		};
	},
	methods: {
		async apply() {
			const OMDB_API_KEY = '7c3a78de';
			const res = await axios.get(
				`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`,
			);

			console.log(res);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/import.scss';

.search-bar {
	@include flexbox;
	@include font($fs: 1rem);

	&__selects {
		@include flexbox;
	}

	&__select {
		width: rem(120);
		margin: 0 5px;
	}
}

form-input {
	@include flexbox;
}
</style>
