<template>
	<splide class="splide-show" :options="options">
		<splide-slide v-for="(photo, index) in photos" :key="index">
			<img :src="photo" :alt=titles[index] />
			<h3 class="photo-titles">{{titles[index]}}</h3>
			<!-- <p>{{projects.titles[0]}}</p> -->
		</splide-slide>
	</splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
	components: {
		Splide,
		SplideSlide,
	},
	name: 'ProjectSlider',
	props: {
		photos: Array,
		titles: Array,
	},
	data() {
		return {
			options: {
				rewind: true,
				width: 800,
				perPage: 1,
        gap: '1rem',
        keyboard: true,
        accessibility: true,
			},
		};
	},
};
</script>

<style lang="scss">
@import '../styles/_variables.scss';
@import '../styles/_mixins.scss';
img {
	width: 100%;
}

.splide-show {
	padding-bottom: 30px;
  width: 100%;
  background-color: darken($color: $background-paper, $amount: 15%);
  border-radius: 1em;
}


.splide__pagination__page{
  background-color: $background-blue;
}

.splide__pagination__page.is-active{
  background-color: $red-text;
}

.photo-titles{
	text-align: center;
	font-family: 'Lato', sans-serif;
	color: $purple-text;
}
</style>
