<!-- The ref attr used to find the swiper instance -->
<template>
    <div>
        <swiper class="swipeIcon" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide v-for="list in getCardlist" :key="list">
                <img :src="list.img">
                <em>{{list.title}}</em>
                <em>{{list.content}}</em>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SwiperBenefit',
    data() {
        return {
            swiperOption: {
                slidesPerView:1,
                spaceBetween: 10,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    delay: 1100,
                    disableOnInteraction: false
                },
            },
        }
    },
    computed: {
        ...mapGetters(['getCardlist']),
        swiper() {
            return this.$refs.mySwiper.swiper
            }
    },
    mounted() {
        this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style scoped>
.swipeIcon img{display:block; margin:0 auto; width:50px; object-fit: cover;}
</style>