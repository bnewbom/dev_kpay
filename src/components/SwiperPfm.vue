<!-- The ref attr used to find the swiper instance -->
<template>
    <div>
        <swiper class="swipeIcon" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide v-for="list in cardList" :key="list">
                <!-- <img :src="list.img"> -->
                <em>{{list.title}}</em>
                <em>{{list.content}}</em>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'SwiperBenefit',
    data() {
        return {
            cardList:[
                {
                    title:'송금 절친',
                    content:'김모모',
                    icoUrl:'',
                },
                {
                    title:'수익날씨',
                    content:'흐림',
                    icoUrl:'',
                },
                {
                    title:'주로 썼어요',
                    content:'0원 쓰기',
                    icoUrl:'',
                }
            ],
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
</style>