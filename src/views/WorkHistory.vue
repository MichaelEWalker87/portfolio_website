<template>
  <section>
    <h1>Work History</h1>
    <HistoryBody/>
  </section>
</template>

<script>
  import HistoryBody from '../components/HistoryBody';

  export default {
      name: 'WorkHistory',
      components: {
      HistoryBody,
    }
  }
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import'../styles/_mixins.scss';

h1{
  @include title-text();
}
</style>