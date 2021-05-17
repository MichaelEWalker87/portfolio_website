<template>
	<splide class="splide-show" :options="options">
		<splide-slide v-for="(photo, index) in photos" :key="index">
			<section >
				<vue-load-image>
					<img :src="photo" :alt=titles[index] slot="image"/>
					<LoadIcon class="load-icon" slot="preloader" src="../images/Gmail_pur.png"/>
        </vue-load-image>
				<h3 class="photo-titles">{{titles[index]}}</h3>
			</section>
		</splide-slide>
	</splide>
</template>

<script>
  import VueLoadImage from 'vue-load-image'
  import LoadIcon from './../views/LoadIcon.vue'
	import { Splide, SplideSlide } from '@splidejs/vue-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	// import LoadIcon from '../views/LoadIcon.vue'

export default {
	components: {
		Splide,
		SplideSlide,
		'vue-load-image': VueLoadImage,
    LoadIcon,
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

.load-icon{

}
</style>
