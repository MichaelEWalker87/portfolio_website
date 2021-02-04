<template>
  <section>
    <section v-for="(project, index) in projects" :key="index + 'project.name'">
      <h2>{{project.name}}</h2>
      <a 
        :href='project.github' 
        class="git-hub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../images/GitHub_pur.png"
        />
        {{project.name}} Link to Github
      </a>
      <section class="project-layout">
        <p>
          {{project.body}}
        </p>
        <ul 
          class="tech-used"
        >
          <p>Technologies Used:</p>
          <li v-for="(tech, index) in project.techUsed"  
            :key="index + 'project.name'"
          >
            {{tech}}
          </li>
        </ul>
        <ProjectSlider :photos="project.photos"     
          class="slider"
        />
      </section>
    </section>
  </section>
</template>

<script>
import ProjectSlider from './ProjectSlider';
//saturn
import saturn1 from '../images/project_work/SaturndEarth/SE_Wireframe.png'
import saturn2 from '../images/project_work/SaturndEarth/DataD.png'
import saturn3 from '../images/project_work/SaturndEarth/Saturnd_Earth.png'
import saturn4 from '../images/project_work/SaturndEarth/Saturnd_Earth_Post.png'
import saturn5 from '../images/project_work/SaturndEarth/Saturnd_Earth_Ring.png'

// fitlit
import fitlit1 from '../images/project_work/FitLit/Wireframe.png'
import fitlit2 from '../images/project_work/FitLit/donut.png'
import fitlit3 from '../images/project_work/FitLit/tophalf.png'
import fitlit4 from '../images/project_work/FitLit/bottomhalf.png'
import fitlit5 from '../images/project_work/FitLit/wholeapp.png'

//travel
import travel1 from '../images/project_work/Travel/login.png'
import travel2 from '../images/project_work/Travel/home.png'
import travel3 from '../images/project_work/Travel/future.png'
import travel4 from '../images/project_work/Travel/present.png'
//Crate
import crate1 from '../images/project_work/Crate/page_10.png'
import crate2 from '../images/project_work/Crate/Overview_top_proto.png'
import crate3 from '../images/project_work/Crate/page_2.png'
import crate4 from '../images/project_work/Crate/final.png'
import crate5 from '../images/project_work/Crate/finalResult.png'

//Tic-Tac-Toe

import tic1 from '../images/project_work/TicTacToe/ticOne.png'
import tic2 from '../images/project_work/TicTacToe/ticTwo.png'
import tic3 from '../images/project_work/TicTacToe/sWins.png'
import tic4 from '../images/project_work/TicTacToe/nextGame.png'
import tic5 from '../images/project_work/TicTacToe/Gwin.png'



export default {
  name: 'ProjectLeft',

  components: {
    ProjectSlider,
  },

  props: {
    photos: Array,
  },

  data(){
    return{
      projects: [
        {
          name: 'Saturn\'d Earth',
          body: 'Saturn\'d Earth is a social media application that captures the user\'s latitude and longitude and displays a ring on the map where the post was made. If anyone near the post "likes" the post, the ring will grow larger. Saturn\'d Earth tracks each post and crosses the globe one like at a time, where only the rarified few encircle the globe.',
          github: 'https://github.com/Saturnd-Earth/se-fe',
          photos: [saturn1, saturn2, saturn3, saturn4, saturn5],
          techUsed: ['React JS with Hooks', 'SCSS', 'Figma', 'Github Project Boards', 'Google Maps API', 'Jest Testing', 'Github Project Boards']
        },
        {
          name: 'Fit-Lit',
          body: 'This project uses test-driven devolvement to build a fitness app in ES6 Javascript. The application takes data from a given set and processes the data to display it to the user. Categories include hydration data for the day, step goal and if that goal was achieved, sleep data, and daily vs weekly bar graphs.',
          github: 'https://github.com/BlakeDonn/fitlit-starter-kit',
          photos: [fitlit1, fitlit2, fitlit3, fitlit4, fitlit5],
          techUsed: ['CSS animations', 'Javascript ES6', 'Test-Driven Devoplement with Jest', 'Github Project Boards']
        },
        {
          name: 'Travel-Tracker',
          body: 'Good Work/Life Beer-lance Travel Tracking project. A user is able to log in, select a destination, start date, days traveling, and a number of travelers then hit submit. Upon the submission, the user will be able to view the trip in the pending tab. The user is also able to view the past, future, and present trips by clicking the appropriate link.',
          github: 'https://github.com/MichaelEWalker87/Travel-Tracker',
          photos: [travel1, travel2, travel3, travel4],
          techUsed: ['JavaScript', 'SASS', 'HTML', 'API Getter/Setters', 'Github Project Boards']
        },
        {
          name: 'Crate',
          body: 'For this project, our team worked on a Brownfield code base to implement a survey feature to an online shopping site. The application changes will allow a user to take a survey and based on the selections, the survey will produce a style recommendation. This project was our first major group project with both the Front-End and Back-End Engineering teams. On this project, I acted as a Front-End Developer and Scrum Master.',
          github: 'https://github.com/GreyMatteOr/crate',
          photos: [crate1, crate2, crate3, crate4, crate5],
          techUsed: ['React with Redux', 'Github Project Boards', 'CSS'] 
        },
        {
          name: 'Tic-Tac-Toe',
          body: 'This project entailed making a Tic-Tac-Toe Game that uses local storage to save the wins of the game and present those wins to the user. The game will place icons and announce the turn order as well as if the player wins or ties based on built-in javascript logic. The project also utilizes keyframes to display a celebratory banner upon win. This was the final project for Mod-1 in the Turing curriculum.',
          github: 'https://github.com/MichaelEWalker87/Tic-Tac-Toe',
          photos: [tic1, tic2, tic3, tic4, tic5],
          techUsed: ['Javascript', 'LocalStorage', 'HTML', 'CSS']
        },
      ]
    }
  }, 
} 
</script>

<style lang="scss" scoped>
  @import '../styles/_variables.scss';
  @import '../styles/_mixins.scss';

  p {
    
    @include p-text();
  }

  h2{
    text-align: left;
    @include p-text();
    margin-left: 1.3em;
  }

  .git-hub{
    @include p-text();
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    img{
      width: 2em;
      padding-right: 0.3em;
    }
    &:hover{
      @include hover();
      font-size: 105%;;
      img{
        width: 2.3em;
      }
    }
  }

  .project-layout{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media screen  and (min-width: 1100px) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-row-columns: 1fr 1fr;
      justify-items: center;
      max-width: 75em;
      padding-right: 1em;
      p{
        padding-right: 1em;
        grid-column-start:1;
        grid-row-start:1;
      }
      .tech-used{
        grid-row-start: 2;
        grid-row-end: span 2;
        grid-column-start: 1;
        padding-left: 0em;

        p{
          margin-left: 0em;
        }
        li{
          margin-left: 2em;
        }
      }
      .slider{
        grid-row-start: 1;
        grid-column-start: 2;
        grid-row-end: span 2;
      }
    }
  }

  .tech-used{
    @include p-text();
    display: flex;
    flex-flow: column;
    place-self: flex-start;
    margin-left: 2em;
    padding-left: 0em;
    padding-right: 2em;
    p{
      margin-left: 0em;
    }
    li{
      margin-left: 2em;
    }
    @media screen  and (max-width: 9000px) {
      margin-right: auto;
    }
  }
</style>