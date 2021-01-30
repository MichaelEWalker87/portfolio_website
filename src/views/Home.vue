<template>
  <section class="home">
    <h1>About Me</h1>
    <p>
      My name is Michael Walker and I am a front-end software developer and product manager. I enjoy working with and managing groups both large and small and have been awarded for organizational and managerial skills on a local and national scale. I strive to work well independently as well as within a team. For me, programming can be a creative and fun way to approach the puzzles of how to best present and execute projects. Being able to creatively develop a product while working with a team to deliver a successful production is something I aim for in each project. Cultivating a creative environment and solving complex issues was a skill that I honed during my time in theatre. Rendering 3D designs in AutoCAD and coming up with elegant solutions to design challenges is what sparked my passion for software development. I am light-hearted and dedicated to helping the growth of any team I am part of. Very eager to bring new and creative ideas to the workplace!
    </p>
  </section>
</template>

<style scoped lang="scss">
@import '../styles/_variables.scss';
@import'../styles/_mixins.scss';

h1{
  @include title-text();
}

p{
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1.5em;
  text-align: left;
  padding-right: 1em;
  @include p-text
}
</style>