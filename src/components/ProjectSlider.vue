<template>
  <carousel :perPageCustom="[[0, 1], [768, 1], [1024, 1]]">
    <slide v-for="(photo, index) in photos" :key="index">
      <img :src='photo'/>
    </slide>
  </carousel>
</template>

<script>
  export default {
    name: 'ProjectSlider',
    props: {
      photos: Array
    }, 
    methods: {
      createSlides(){
        console.log(this.photos)
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/_variables.scss';
  @import '../styles/_mixins.scss';
  .VueCarousel-slide{
    text-align: center;
    width: 0em;
    height: fit-content;
  }

  .VueCarousel-pagination .VueCarousel-dot {
        background-color: $background-blue !important;
  }


  .VueCarousel-pagination .VueCarousel-dot--active {
        background-color: $red-text !important;
  }

  .VueCarousel{
    border-width: thick;
    border-color: blue;
    border-style: double;
    height: fit-content;
    min-width: fit-content;
  }
  img {
    width: 50em;
    text-align: center;
    align-self: center;
  }
  .VueCarousel-pagination{
    margin-top: -2em;
  }

  .VueCarousel-slide-active{
    width: fit-content;
  }
</style>

