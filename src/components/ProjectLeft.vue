<template>
  <section>
    <section v-for="(project, index) in projects" :key="index">
      <h2>{{project.name}}</h2>
      <section class="project-layout">
        <p>
          {{project.body}}
        </p>
        <ProjectSlider :photos="project.photos"/>
      </section>
      <a :href='project.github' class="git-hub">
        <img
          src="../images/GitHub_pur.png"
        />
        {{project.name}} Link to Github
      </a>
    </section>
  </section>
</template>

<script>
import ProjectSlider from './ProjectSlider';
import page from '../images/project_work/page_1.png';
import page2 from '../images/project_work/page_2.png';
import page3 from '../images/project_work/page_3.png';

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
          name: 'thing1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          github: 'https://www.w3schools.com',
          photos: [page, page2, page3, page3]
        },
        {
          name: 'thing2',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          github: 'https://www.w3schools.com',
          photos: [page3, page2, page3]
        },
        {
          name: 'the thing',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          github: 'https://www.w3schools.com',
          photos: [require('../images/project_work/page_1.png'), page2, page2]
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
    text-align: left;
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
    img{
      width: 2em;
    }
  }

  .project-layout{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
</style>