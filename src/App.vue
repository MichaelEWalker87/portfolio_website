<template>
  <div>
    <the-container>
      <the-header/>
    </the-container>
      <router-view/>
  </div>
</template>

<script>
  import TheContainer from './components/TheContainer.vue';
  import TheHeader from './components/TheHeader.vue';

  export default {
      name: 'App',
      components: {
      TheContainer,
      TheHeader
    }
  }
</script>

<style lang="scss">
  @import './styles/_variables.scss';

  body{
    padding: 0px;
    margin: 0px;
    background-color: $background-paper;
  }

</style>
