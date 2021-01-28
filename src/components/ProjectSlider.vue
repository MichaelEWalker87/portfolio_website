<template>
  <carousel :perPageCustom="[[0, 1], [768, 1], [1024, 1]]">
    <slide v-for="(photo, index) in photos" :key="photo+index">
      <img :src="photo"/>
    </slide>
  </carousel>
</template>

<script>
  export default {
    name: 'ProjectSlider',
    props: {
      photos: Array
    }, 
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
    background-color: darken($color: $background-paper, $amount: 10%);
    border-radius: 1em;
    height: fit-content;
    min-width: fit-content;
    margin-bottom: 1em;
  }
  
  img {
    width: 50em;
    text-align: center;
    align-self: center;
    @media screen  and (max-width: 955px){
      width: 40em;
    }
    @media screen  and (max-width: 755px){
      width: 30em;
    }
    @media screen  and (max-width: 655px){
      width: 23em;
    }
  }
  .VueCarousel-pagination{
    margin-top: -2em;
  }

  .VueCarousel-slide-active{
    width: fit-content;
  }
</style>

