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
        <ProjectSlider :photos="project.photos"  :titles="project.titles"   
          class="slider"
        />
      </section>
    </section>
  </section>
</template>

<script>
import ProjectSlider from './ProjectSlider';
//saturn

export default {
  name: 'ProjectLeft',

  components: {
    ProjectSlider,
  },

  props: {
    projects: Array,
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