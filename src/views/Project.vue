<template>
  <section class="about">
    <h1>Project</h1>
    <section class="project-body">
      <ProjectLeft/>
    </section>
  </section>
</template>


<script>
  import ProjectLeft from '../components/ProjectLeft';

  export default {
      name: 'Project',
      components: {
      ProjectLeft,
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
