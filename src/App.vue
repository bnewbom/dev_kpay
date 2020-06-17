<template>
  <div id="app">
    <navi-links></navi-links>
    <router-view></router-view>
  </div>
</template>

<script>
import NaviLinks from './components/NaviLinks' 
 
export default {
  name: 'App',
  components: {
    NaviLinks,
  }
}
</script>

<style>
@import './style/default.scss';
</style>
