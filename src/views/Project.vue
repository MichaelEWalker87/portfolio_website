<template>
  <section class="about">
    <h1>Project</h1>
    <section class="project-body">
      <ProjectLeft/>
      <ProjectRight/>
    </section>
  </section>
</template>


<script>
  import ProjectLeft from '../components/ProjectLeft';
  import ProjectRight from '../components/ProjectRight';

  export default {
      name: 'Project',
      components: {
      ProjectLeft,
      ProjectRight
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
  // display: grid;
  // grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-items: center;
}

img{
  width: 3em;
}
</style>
