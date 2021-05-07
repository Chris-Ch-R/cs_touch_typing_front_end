<template>
  <div id="app">
    <component :is="layout">
      <router-view :key="$route.path"/>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default'
export default {
  name: 'App',
  computed:{
    layout(){
      return (this.$route.meta.layout || defaultLayout ) + '-layout'
    }
  }
};
</script>



<style>
</style>
