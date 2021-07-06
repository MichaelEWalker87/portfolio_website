<template>
  <section class="about">
    <section>
      <h1>Project</h1>
      <section class="project-body">
        <ProjectLeft :projects="projects"/>
      </section>
    </section>
  </section>
</template>


<script>
  import ProjectLeft from '../components/ProjectLeft';
  // import LoadIcon from './LoadIcon'
 
 //Star War Racing 
  import starWarsR1 from '../images/project_work/StarWarsRacing/GameStart.png'
  import starWarsR2 from '../images/project_work/StarWarsRacing/GameEnd.png'
  import starWarsR3 from '../images/project_work/StarWarsRacing/X-WingWins.png'

  //Brick

  import brick1 from '../images/project_work/BrickBreaker/GameStart.png'
  import brick2 from '../images/project_work/BrickBreaker/MidGame.png'

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

  //Motivtional Posters
  import motivation1 from '../images/project_work/Motivation/RegularPoster.png'
  import motivation2 from '../images/project_work/Motivation/MakeYourOwn.png'
  import motivation3 from '../images/project_work/Motivation/CustomPoster.png'
  import motivation4 from '../images/project_work/Motivation/MiniPosters.png'

  //Tic-Tac-Toe

  import tic1 from '../images/project_work/TicTacToe/ticOne.png'
  import tic2 from '../images/project_work/TicTacToe/ticTwo.png'
  import tic3 from '../images/project_work/TicTacToe/sWins.png'
  import tic4 from '../images/project_work/TicTacToe/nextGame.png'
  import tic5 from '../images/project_work/TicTacToe/Gwin.png'
  
  //monster rolodex

  import monster1 from '../images/project_work/MonsterRolodex/'

  export default {
      name: 'Project',
      components: {
      ProjectLeft,
      // LoadIcon,
    },
    
    data(){
      return{
        projects: [
          {
            name: 'Star Wars Racing',
            body: 'This was a course from Udemy that covered the basics of tile game building. The application allows for two players to race each other in an old retro gaming fashion. Upon winning the race the game will reset. The purpose of this application was to get practice with the HTML5 Canvas Element and Vanilla Javascript. This game is a two player game with player one being in an X-Wing and player two in the Y-Wing.',
            github: 'https://github.com/MichaelEWalker87/RaceCar',
            photos: [starWarsR1, starWarsR2, starWarsR3],
            titles: ["In Game Play Start", "In Game Play End", "In Game X-Wing Wins"],
            techUsed: ['Javascript', 'HTML5 Canvas', 'Github', 'CSS']
          },
          {
            name: 'Brick Braker',
            body: 'Project made to get hands-on practice with Canvas and game development. This project tracks a Udemy course in game design. The application is a classic videogame recreation of Brick Breaker. The user can control the paddle with the mouse tracking motion and use the paddle to direct the ball placement. If the player loses or the ball goes out of play, the board will reset.',
            github: 'https://github.com/MichaelEWalker87/Canvas_Games_Intro',
            photos: [brick1, brick2],
            titles: ["In Game Start", "Mid Game Play"],
            techUsed: ['HTML5 Canvas', 'Github']
          },
          {
            name: 'Saturn\'d Earth',
            body: 'Saturn\'d Earth is a social media application that captures the user\'s latitude and longitude and displays a ring on the map where the post was made. If anyone near the post "likes" the post, the ring will grow larger. Saturn\'d Earth tracks each post and crosses the globe one like at a time, where only the rarified few encircle the globe.',
            github: 'https://github.com/Saturnd-Earth/se-fe',
            photos: [saturn1, saturn2, saturn3, saturn4, saturn5],
            titles: ["Mockup", "Data Diagram", "Starting App Visual", "Application Form", "Application Post"],
            techUsed: ['React', 'SCSS', 'Figma', 'Github Project Boards', 'Google Maps API', 'Jest Testing', 'Github Project Boards']
          },
          {
            name: 'Fit-Lit',
            body: 'This project uses test-driven devolvement to build a fitness app in ES6 Javascript. The application takes data from a given set and processes the data to display it to the user. Categories include hydration data for the day, step goal and if that goal was achieved, sleep data, and daily vs weekly bar graphs.',
            github: 'https://github.com/BlakeDonn/fitlit-starter-kit',
            photos: [fitlit1, fitlit2, fitlit3, fitlit4, fitlit5],
            titles: ["Quick Idea Wireframe", "Donut Chart", "Application Top", "Application Bottom", "Whole Application"],
            techUsed: ['CSS animations', 'Javascript ES6', 'Test-Driven Devoplement with Jest', 'Github Project Boards']
          },
          {
            name: 'Travel-Tracker',
            body: 'Good Work/Life Beer-lance Travel Tracking project. A user is able to log in, select a destination, start date, days traveling, and a number of travelers then hit submit. Upon the submission, the user will be able to view the trip in the pending tab. The user is also able to view the past, future, and present trips by clicking the appropriate link.',
            github: 'https://github.com/MichaelEWalker87/Travel-Tracker',
            photos: [travel1, travel2, travel3, travel4],
            titles: ["Application Sing In", "Application Home", "Future Trips Tab", "Present Trips Tab"],
            techUsed: ['JavaScript', 'SASS', 'HTML', 'API Getter/Setters', 'Github Project Boards']
          },
          {
            name: 'Crate',
            body: 'For this project, our team worked on a Brownfield code base to implement a survey feature to an online shopping site. The application changes will allow a user to take a survey and based on the selections, the survey will produce a style recommendation. This project was our first major group project with both the Front-End and Back-End Engineering teams. On this project, I acted as a Front-End Developer and Scrum Master.',
            github: 'https://github.com/GreyMatteOr/crate',
            photos: [crate1, crate2, crate3, crate4, crate5],
            titles: ["Quick Idea Mockup", "Quick Idea Mockup Survey", "Quick Idea Mockup Final Result", "Application Survey", "Application Result"],
            techUsed: ['React with Redux', 'Github Project Boards', 'CSS'] 
          },
          {
            name: 'Hang In There Motivational Poster',
            body: 'This application was one of my first introductions to Javascript, CSS, and HTML. This application covers allowing a user to cycle throw a series of motivation poster images and slogans. If the user likes the Motivational poster, the user can save the poster. The application then will use local storage to save the poster in the show "Saved Poster" section. The user can also make a new poster in the "Make Your Own Poster" section.',
            github: 'https://github.com/MichaelEWalker87/hang-in-there-boilerplate',
            photos: [motivation1, motivation2, motivation3, motivation4],
            titles: ["Home Page", "Make Your Own Poster Form", "Custom Poster ", "Mini Posters"],
            techUsed: ['Javascript', 'LocalStorage', 'HTML', 'CSS']
          },
          {
            name: 'Tic-Tac-Toe',
            body: 'This project entailed making a Tic-Tac-Toe Game that uses local storage to save the wins of the game and present those wins to the user. The game will place icons and announce the turn order as well as if the player wins or ties based on built-in javascript logic. The project also utilizes keyframes to display a celebratory banner upon win. This was the final project for Mod-1 in the Turing curriculum.',
            github: 'https://github.com/MichaelEWalker87/Tic-Tac-Toe',
            photos: [tic1, tic2, tic3, tic4, tic5],
            titles: ["Game Play Lion's Turn", "Game Play Snake's Turn", "Winning Snake Animation", "Game Win Count Increase", "Winning Lion Animation"],
            techUsed: ['Javascript', 'LocalStorage', 'HTML', 'CSS']
          },
        ]
      }
    }, 
  methods: {
    log: function (e) {
      console.log(e);
    } 
  }
  }
</script>


<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import'../styles/_mixins.scss';

h1{
  @include title-text();
}

.project-body{
  align-items: center;
  justify-items: center;
}

img{
  width: 3em;
}
</style>
