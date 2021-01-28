<template>
  <section class="work-section">
    <section class="work-section-right">
      <h2>Istonish</h2>
      <section class="company-info">
        <img src="../images/work_photos/Istonish.jpg"/>
        <h3 class="info-right">Infomation Tecnolgy</h3>
        <p class="info-right">From 20xx - 20xx</p>
        <a 
          class="info-right"
          href="https://www.vuemastery.com/courses/intro-to-vue-js/tabs"
        >
          link to website
        </a>
        <p class="info-right">Denver, CO</p>
      </section>
    </section>
    <section class="description">
      <p>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      </p>
    </section>
    <section class="icons">
      <!-- <img src="../images/Award_pur.png"/>
      <img src="../images/Lightbulb_pur.png"/>
      <img src="../images/Recomend_pur.png"/> -->
    </section>
  </section>
</template>

<script>
export default {
  name: 'HistoryBody',

  components: {

  },

  props: {
    photos: Array,
  },

  data(){
    return{
      workHistoryList: [
        {
          name: 'Istonish',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          link: 'https://www.w3schools.com',
          image: '',
          dates: '',
          location: '',
        }, 
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/_variables.scss';
  @import '../styles/_mixins.scss';

  .company-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    @include p-text();
  }

  h2{
    text-align: left;
    @include p-text();
    margin-left: 1.3em;
  }

  img {
    width: 10em;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: span 4;
  }

  .info-right{
    grid-column-start: 2;
  }

  .work-section{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    margin-right: 1em;
  }

  .description{
    grid-column-start: 2;
    align-self: end;
  }

  .icons{
    grid-column-start: 2;
    display: flex;
    place-content: space-around;
    img{
      width: 3em;
    }
  }
</style>