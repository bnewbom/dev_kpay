<!-- The ref attr used to find the swiper instance -->
<template>
    <div>
        <div class="toolbar">
            <!-- <a :style="this.$refs.mySwiper.$swiper.realIndex === '0' ? { color: '#033fad' }: ''" @click="toSlide(0)">홈</a> -->
            <a @click="toSlide(0)">홈</a>
            <a @click="toSlide(1)">자산관리</a>
            <a @click="toSlide(2)">혜택</a>
            <a @click="toSlide(3)">서비스</a>
        </div>
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
    </div>
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
    methods: {
      toSlide(index) {
        this.$refs.mySwiper.$swiper.slideTo(index, 0)
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
    },
}
</script>
<style scoped>
.swiper-container {
      width: 100%;
      height: auto;
      margin-top:10px;
}
.toolbar {margin:10px;}
.toolbar a{font-size: 14px; display: inline-block; margin-left:8px; font-weight: bold;}
</style>