<template>
  <div id="app">
    <router-view/>
    <main-tab-tar></main-tab-tar>
  </div>
</template>

<script>
import MainTabTar from "./components/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabTar
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
