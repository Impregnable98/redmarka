<template>
  <div class="slide" :id="id">

    <div class="slide__leftBack"></div>
    <div class="slide__rightBack"></div>
    <div class="slide__gradient"></div>

    <img :src="img" alt="">
    <div class="slide__content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: ['id', 'img', 'content']
}
</script>

<style lang="stylus" scoped>
  .slide
    width 100%
    height 100vh !important
    position relative
    overflow hidden
    img {
      width 100%
      height 100%
      object-fit cover
    }
    &__leftBack
      position absolute
      width 40%
      height 100%
      background rgba(255,255,255,.3)
      left -1000px
      top 0
      z-index 2
      transition-delay 5s
      transition .5s
      transform skewX(-22.5deg)
    &__rightBack
      position absolute
      width 40%
      height 100%
      background rgba(0,0,0,.15)
      right -1000px
      bottom 0
      transition-delay 5s
      transition .5s
      transform skewX(-22.5deg)
      z-index 2
    &__gradient
      position absolute
      width 100%
      height 100%
      background rgba(0,0,0,.15)
      z-index 1
    &__content
      font-size 42px
      color #fff
      font-family ClearSans, sans-serif
      width 425px
      position absolute
      bottom 135px
      right 90px
      z-index 3
  @media (max-width: 970px)
    .slide
      &__leftBack
      &__rightBack
        display none
      &__gradient
        background linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
      &__content
        top 330px
        left calc(50% - 216px)
        text-align center
        color #676b6d
  @media (max-width: 480px)
    .slide
      &__content
        top 260px
        font-size 30px
        width 320px
        left calc(50% - 160px)
</style>
