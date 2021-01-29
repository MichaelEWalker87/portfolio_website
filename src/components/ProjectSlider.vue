<template>
	<splide class="splide-show" :options="options">
		<splide-slide v-for="(photo, index) in photos" :key="index">
			<img :src="photo" alt="" />
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
	},
	data() {
		return {
			options: {
				rewind: true,
				width: 800,
				perPage: 1,
				gap: '1rem',
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
  width: 100%
}
</style>
