<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper class="newSwipe" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="list in getBenefits" :key="list">
        <img :src="list.img">
    </swiper-slide>
  </swiper>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SwiperList',
    data() {
        return {
                swiperOption: {
                slidesPerView:4,
                spaceBetween: 10,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    computed: {
        ...mapGetters(['getBenefits']),
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