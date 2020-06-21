<template>
  <div id="app">
    <navi-links></navi-links>
    <transition name="fade">
      <router-view></router-view>
    </transition>

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
