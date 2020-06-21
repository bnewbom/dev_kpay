<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper class="newSwipe" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
        <Home></Home>
    </swiper-slide>
    <swiper-slide>
        <Manage></Manage>
    </swiper-slide>
    <swiper-slide>
        <Benefit></Benefit>
    </swiper-slide>
    <swiper-slide>
        <Service></Service>
    </swiper-slide>

  </swiper>
</template>

<script>
import Home from './Home'
import Manage from './Manage'
import Benefit from './Benefit'
import Service from './Service'

export default {
    name: 'SwiperViewContainer',
    components:{
        Home,
        Manage,
        Benefit,
        Service
    },
    data() {
        return {
                swiperOption: {
                autoHeight: true,
                slidesPerView:1,
                spaceBetween: 10,
                //freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
            }
    },
    mounted() {
        this.swiper.slideTo(3, 1000, false)
        this.$store.dispatch('FETCH_BENEFITS');
    }
}
</script>
<style scoped>
.swiper-container {
      width: 100%;
      height: auto;
    }
</style>