<template>
  <div id="app">
    <ViewContainer></ViewContainer>
  </div>
</template>

<script>
import ViewContainer from './views/ViewContainer' 

export default {
  name: 'App',
  components: {
    ViewContainer,
  }
}
</script>

<style>
@import './style/default.scss';
</style>
