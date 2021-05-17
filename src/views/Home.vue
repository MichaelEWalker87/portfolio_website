<template>
  <section class="home">
    <h1>About Me</h1>
    <p>
      My name is Michael Walker, and I am a Front-End Software Developer and Product Manager. I enjoy working with and managing groups both large and small and awarded for organizational and managerial skills on a local and national scale. I strive to work well independently as well as within a team. For me, programming and product management can often lead to a  creative and fun process, I approach each project like a puzzle and finding the best way to achieve the project goal. Being able to creatively develop a product while working with a team to deliver a successful production is something I aim for in each project. Cultivating a creative environment and solving complex issues was a skill that I honed while in theatre technology. Rendering 3-D designs in AutoCAD and coming up with elegant solutions to design challenges is what sparked my passion for software development. I am light-hearted and dedicated to helping the growth of any team. I am very eager to bring new and creative ideas to the workplace!
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