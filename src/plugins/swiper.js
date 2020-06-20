import Vue from 'vue'
import Swiper from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

export const mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});