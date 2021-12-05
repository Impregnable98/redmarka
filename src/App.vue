<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  @font-face
    font-family ClearSans
    font-style normal
    src url(/assets/fonts/ClearSans-Regular.ttf)
  body
    height: 100vh
    margin: 0
    font-family ClearSans
    box-sizing border-box
  #app
    width: 100%
    height: 100%
    position: relative
    overflow: hidden
</style>
