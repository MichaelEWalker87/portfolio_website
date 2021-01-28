<template>
  <section class="work-section">
    <section v-for="(job, index) in jobs" :key="index+'job.name'"
      class="work-section-right"
    >
      <h2>{{job.name}}</h2>
      <section class="company-info">
        <img :src="job.image"/>
        <h3 class="info-right sub-title">{{job.title}}</h3>
        <p class="info-right">{{job.dates}}</p>
        <a 
          class="info-right"
          :href="job.link"
        >
          Link To Website
        </a>
        <p class="info-right">{{job.location}}</p>
      </section>
    </section>
    <section v-for="(job, index) in jobs" :key="index"
      class="description"
    >
      <p class="text-body">{{job.body}}</p>
    </section>
    <section class="icons">
      <!-- <img src="../images/Award_pur.png"/>
      <img src="../images/Lightbulb_pur.png"/>
      <img src="../images/Recomend_pur.png"/> -->
    </section>
  </section>
</template>

<script>
  import Istonish from '../images/work_photos/Istonish.jpg'
  export default {
    name: 'HistoryBody',

    components: {

    },

    props: {
      photos: Array,
    },

    data(){
      return{
        jobs: [
          {
            name: 'Istonish',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            link: 'https://www.w3schools.com',
            image: Istonish,
            dates: 'From 2019-2020',
            title: "Information Technology", 
            location: 'Denver, CO',
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
    text-decoration: none;
    @include p-work-history();
  }
  .sub-title{
    margin-bottom: 0em;
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

  .text-body{
    font-size: 1.1em;
    @include p-text-no-margin()
  }
</style>