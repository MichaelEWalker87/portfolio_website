<template>
  <section class="work-section">
    <section v-for="(job, index) in jobs" :key="index+'job.name'"
      class="work-section-right"
    >
      <h2>{{job.name}}</h2>
      <section class="company-info">
        <a 
          class=" info-a"
          :href="job.link"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img 
          alt="'job.name' logo" 
          :src="job.image"
        />
        </a>
        <h3 class="info-right sub-title">{{job.title}}</h3>
        <p class="info-right dates">{{job.dates}}</p>
        <p class="info-right location">{{job.location}}</p>
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
  import Turing from '../images/work_photos/Turing.png'
  import Istonish from '../images/work_photos/Istonish.jpg'
  import TMobile from '../images/work_photos/TMobile.png'
  import Arvada from '../images/work_photos/Arvada.png'
  import Curious from '../images/work_photos/Curious.png'
  import Utah from '../images/work_photos/Utah.png'
  import OU from '../images/work_photos/OU.png'
  import OUDaily from '../images/work_photos/Daily.png'
  import AirForce from '../images/work_photos/AriForce.png'

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
            name: 'Turing School of Software & Design',
            body: 'Focused on building client-side applications that are accessible to all users and efficiently process large and complex data sets. While at Turing, I covered the basics of object-oriented programming, modern frameworks, cross-browser compatibility, and developed basic UX and design principles. Technologies and skills I developed while at Turing include: JavaScript(ES5-ES9), React, HTML5, CSS3, SCSS, Webpack, Mocha/Chai, Jest, Vue, object-oriented programming, Agile methodologies, test-driven development, and Git/GitHub workflows.',
            link: 'https://frontend.turing.io/',
            image: Turing,
            dates: '2020-2021',
            title: "Software Engineer", 
            location: 'Denver, CO',
          }, 
          {
            name: 'Istonish',
            body: 'Worked as an IT Specialist devoting my days listening to our client\'s needs and translating them to actionable outcomes that benefited the communities we served. Through listening and analyzing the client\'s problems, I was able to make a difference and help those with computers and networking issues by resolving without escalation 90 percent of the time. I fostered an environment that cultivated a mindset of growth. I worked with our team leads to help bring people on and assisted in the training and shadowing process.',
            link: 'https://www.istonish.com/',
            image: Istonish,
            dates: '2019-2020',
            title: "Information Technology Specialist", 
            location: 'Greenwood Village, CO',
          }, 
          {
            name: 'T-Vison',
            body: 'Helped launch new sales markets for T-Mobile\'s new TV Entertainment Department. In addition, I excelled in outbound sales call efforts and fielded incoming sales leads. I conducted campaigns to help with the company\'s churn rate. Aided in building flyers for promotional events within the company. I also maintained a working knowledge of the various products on the market and how they differ from Layer3 TV. Programs used daily to conduct business included SalesForce, Avaya, Maestro, and Google Calendar.',
            link: 'https://www.t-mobile.com/tvision',
            image: TMobile,
            dates: '2018-2019',
            title: "Telesales Specialist", 
            location: 'Denver, CO',
          }, 
          {
            name: 'Arvada Center for the Arts and Humanities',
            body: 'In this position, I honed my project management skills and ability to work in a fast-paced and detail-oriented environment. Collaborated with leading members of the art community from around the world to help build theatrical productions. Tasks included: design implementation, 3-D drafting, Excel programming, and communication with the production staff.',
            link: 'https://www.arvadacenter.org/',
            image: Arvada,
            dates: '2015-2018',
            title: "Production Specialist", 
            location: 'Arvada, CO',
          }, 
          {
            name: 'Curious Theatre Company',
            body: 'Built new productions working alongside the Theatrical Director and an award-winning group of theatrical professionals. I often led large projects from initial design to final installation. Additionally, I managed crews for all shows in the season with various levels of management responsibilities. I assisted with the budget management of the season\'s productions.',
            link: 'https://www.curioustheatre.org/',
            image: Curious,
            dates: '2014-2015',
            title: "Assistant Technical Director", 
            location: 'Denver, CO',
          }, 
          {
            name: 'Utah Shakespear Festival',
            body: 'Managed large stage crews, responsibilities included making a daily schedule for the crew and management of 4 theatrical spaces. Additionally, I oversaw all daily scenic changeovers and audience tech talks. I tracked all needed repairs, created Changeover Reports, purchased all needed materials for production upkeep, and facilitated general notes for the theatrical spaces.',
            link: 'https://www.bard.org/',
            image: Utah,
            dates: '2014-2014',
            title: "Stage Supervisor", 
            location: 'Cider City, UT',
          }, 
          {
            name: 'University of Oklahoma',
            body: 'Completed lead projects with peers and other students from the stagecraft and production classes. I was instrumental in the training and safety implementation for technical courses. Additionally, I would work as a Technical Director on various projects, overseeing and working closely with the design teams. I also assisted with building, painting, and installing scenery for University Theatre.',
            link: 'https://www.ou.edu/finearts/drama',
            image: OU,
            dates: '2011-2014',
            title: "Undergraduate Assistant", 
            location: 'Norman, OK',
          }, 
          {
            name: 'University of Oklahoma Video and Media Services',
            body: 'Worked with local and national businesses to build advertising for the targeted market. We primarily used Adobe products to execute the design. We would also talk to the client on a one-on-one basis to help develop and establish lasting relationships.',
            link: 'http://www.oudaily.com/news/',
            image: OUDaily,
            dates: 'From 2011-2012',
            title: "Graphic Designer", 
            location: 'Norman, OK',
          }, 
          {
            name: 'United States Air Force',
            body: 'As a Graphic Designer for the Air Force, I primarily built training and recruiting material, as well as other projects as assigned. We worked with a variety of programs, most notably the Adobe series of products. I was also the lead fitness trainer for the advanced fitness group and formation leader. I was honorably discharged.',
            link: 'https://www.dinfos.dma.mil/Student-Info/Service-In-processing/Air-Force/',
            image: AirForce,
            dates: '2006-2006 (Honorable Separation)',
            title: "Graphic Designer", 
            location: 'Fort Meade, MD',
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
    min-height: 253px;
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

      .text-body{
        grid-row-start: 5;
        grid-column-start: 1;
        grid-column-end: span 3;
        margin-top: 0.5em;
        padding-left: 1em;
      }
      
      .sub-title{
        padding-top: 1em;
      }
    }
  }

  .info-a{
      padding: 1em;
      grid-row-end: span 4;
      &:hover{
      @include hover();
      height: fit-content;
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

  .work-section-right{
    margin-bottom: 1em;
    max-width: 1300px;
  }

  .info-right{
    grid-column-start: 2;
    text-decoration: none;
    @include p-work-history();
  }
  .sub-title{
    margin-bottom: 0em;
    margin-top: 1em;
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

  .location{
    margin-top: 0;  
  }
</style>