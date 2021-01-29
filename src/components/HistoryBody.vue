<template>
  <section class="work-section">
    <section v-for="(job, index) in jobs" :key="index+'job.name'"
      class="work-section-right"
    >
      <h2>{{job.name}}</h2>
      <section class="company-info">
        <img :src="job.image"/>
        <h3 class="info-right sub-title">{{job.title}}</h3>
        <p class="info-right dates">{{job.dates}}</p>
        <a 
          class="info-right info-a"
          :href="job.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link To Website
        </a>
        <p class="info-right">{{job.location}}</p>
        <p class="text-body">{{job.body}}</p>
      </section>
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
    grid-template-columns: 1fr 2fr 3fr;
    @include p-text();
    @media screen  and (max-width: 955px){
      img{
        margin-bottom: auto;
      }
      h3{
        margin-top: 0em;
        grid-column-end: span 2;
        margin-bottom: 0.5em;
      }
      .dates{
        margin-top: 0em;
        grid-column-end: span 2;
      }
      p{
        margin-top: 0em;
        grid-column-end: span 2;
      }
      .info-right{
        grid-column-end: span 2;
        margin-bottom: 0.5em;
      }
      
      a{
        &:hover{
          @include hover();
          font-size: 120%;
        }
      }

      .text-body{
        grid-row-start: 5;
        grid-column-start: 1;
        grid-column-end: span 3;
        margin-top: 0.5em;
      }
    }
  }

  .info-a{
      &:hover{
      @include hover();
      font-size: 120%;
    }
  }

  h2{
    text-align: left;
    @include p-text();
    margin-left: 1.3em;
  }

  img {
    width: 10em;
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
    display: inline-block;
    grid-template-columns: 1fr 1.5fr;
    margin-right: 1em;
  }

  .description{
    // grid-column-start: 2;
    align-self: end;
  }

  .icons{
    // grid-column-start: 2;
    display: flex;
    place-content: space-around;
    img{
      width: 3em;
    }
  }

  .text-body{
    font-size: 1.1em;
    grid-column-start: 3;
    grid-row-end: span 4;
    grid-row-start: 1;
    @include p-text-no-margin()
  }
</style>