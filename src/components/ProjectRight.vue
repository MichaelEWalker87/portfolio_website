<template>
  <carousel :perPageCustom="[[0, 1]]">
    <slide>
      <img src="../images/Book_Red.png"/>
    </slide>
    <slide>
      <img src="../images/Book_Red.png"/>
    </slide>
    <slide>
      <img src="../images/Book_Red.png"/>
    </slide>
    <slide>
      <img src="../images/Book_Red.png"/>
    </slide>
    <slide>
      <img src="../images/Book_Red.png"/>
    </slide>
  </carousel>
</template>

<style lang="scss">
  @import '../styles/_variables.scss';
  @import '../styles/_mixins.scss';
  .VueCarousel-slide{
    text-align: center;
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
  }
  img {
    text-align: left;
    width: 4em;
    text-align: center;
  }
</style>

