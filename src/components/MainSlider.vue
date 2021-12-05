<template>
 <div class="mainSlider">
   <img class="mainSlider__logo" src="@/assets/img/logo.png" alt="">
   <div class="mainSlider__lang">
     <a href="#" class="mainSlider__langElem active">ru</a>
     <a href="#" class="mainSlider__langElem">en</a>
   </div>
   <div class="mainSlider__arrows">
     <button class="mainSlider__button mainSlider__leftArrow" @click="prev"></button>
     <button class="mainSlider__button mainSlider__rightArrow" @click="next"></button>
   </div>
   <slick class="mainSlider__wrap" ref="slick" :options="slickOptions" @beforeChange="beforeChangeSlide" @afterChange="afterChangeSlide">
      <Slide v-for="slide in slider" :key="slide.id" :id="slide.id" :img="slide.imageUrl" :content="slide.content"/>
   </slick>
 </div>
</template>

<script>
import Slick from 'vue-slick'
import Slide from './Slide.vue'

import '../../node_modules/slick-carousel/slick/slick.css'
export default {
  name: 'MainSlider',
  components: { Slick, Slide },
  data () {
    return {
      slider: [
        {
          id: 1,
          imageUrl: require('../assets/img/slide-1.png'),
          content: 'Опыт, вековая история, научные разработки, открытия и личности'
        },
        {
          id: 2,
          imageUrl: require('../assets/img/slide-2.jpg'),
          content: 'Создавать возможности, преуспеть в своих устремлениях'
        },
        {
          id: 3,
          imageUrl: require('../assets/img/slide-3.jpg'),
          content: 'Опыт, вековая история, научные разработки, открытия и личности'
        }
      ],
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        arrows: false
      }
    }
  },
  methods: {
    beforeChangeSlide () {
      let parent = document.getElementsByClassName('slick-current')
      let elemLeft = parent[0].getElementsByClassName('slide__leftBack')
      let elemRight = parent[0].getElementsByClassName('slide__rightBack')
      elemLeft[0].style.left = '-1000px'
      elemRight[0].style.right = '-1000px'
    },
    afterChangeSlide () {
      let parent = document.getElementsByClassName('slick-current')
      let elemLeft = parent[0].getElementsByClassName('slide__leftBack')
      let elemRight = parent[0].getElementsByClassName('slide__rightBack')
      elemLeft[0].style.left = '-300px'
      elemRight[0].style.right = '-300px'
    },
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    }
  },
  mounted () {
    this.afterChangeSlide()
  }
}
</script>

<style lang="stylus" scoped>
  $main-color = #80bf44
  .mainSlider
    width 100%
    height 100%
    &__logo
      position absolute
      top 80px
      left 120px
      height 190px
      width auto
      z-index 3
    &__lang
      position absolute
      top 80px
      right 28px
      z-index 3
    &__langElem
      width 38px
      height 38px
      border-radius 55px
      display flex
      align-items center
      justify-content center
      color #fff
      font-size 15px
      text-decoration none
      text-transform uppercase
      font-family ClearSans, sans-serif
      border 2px solid #fff
      box-sizing border-box
      &:first-child
        margin-bottom 20px
    .active
      background $main-color
      border-color $main-color
    &__wrap
      width 100%
      height 100%
    &__arrows
      position absolute
      display flex
      bottom 80px
      left 120px
      z-index 3
    &__button
      display flex
      width 48px
      height 48px
      border-radius 55px
      background #fff
      position relative
      border: none
      cursor pointer
      transition .3s
      &:hover::before
        background #fff
      &:hover::after
        background #fff
      &:hover
        background $main-color
    &__leftArrow
      margin-right 20px
      &::before
        content ""
        position absolute
        background #272b2e
        left 15px
        bottom 18px
        height 2px
        width 14px
        transform rotate(45deg)
      &::after
        content ""
        position absolute
        background #272b2e
        left 15px
        top 18px
        height 2px
        width 14px
        transform rotate(135deg)
    &__rightArrow
      &::before
        content ""
        position absolute
        background #272b2e
        right 15px
        bottom 18px
        height 2px
        width 14px
        transform rotate(-45deg)
      &::after
        content ""
        position absolute
        background #272b2e
        right 15px
        top 18px
        height 2px
        width 14px
        transform rotate(-135deg)
  @media (max-width: 970px)
    .mainSlider
      &__langElem
        border 2px solid $main-color
        color $main-color
       .active
          color #fff
      &__logo
        left: calc(50% - 216px)
      &__arrows
        left: calc(50% - 58px)
  @media (max-width: 480px)
    .mainSlider
      &__logo
        width 310px
        height auto
        left calc(50% - 155px)
</style>
