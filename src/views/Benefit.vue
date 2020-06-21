<template>
    <div class="benefit">
        <h1>benefit</h1>
        <!--summary-->
        <header>
            <h2>받은 혜택</h2>
            <p>{{thisMonth}}월 받은 혜택</p>
            <span>0원</span>
            <a>쿠폰</a>
        </header>
        <ul class="headerMenu">
            <li>할인&적립</li>
            <li>업그레이드</li>
        </ul>        
        <!--ad banner-->
        <a class="ad">컴백! 결제마다 알 드려요!</a>

        <!--메인 혜택 리스트-->
        <section class="main">
            <h2>메인 혜택 리스트</h2>
            <swiper-list></swiper-list>
            <ul>
                <li v-for="list in mainBenefitList" :key="list">
                    <span>{{list.title}}</span>
                    <span>{{list.subtitle}}</span>
                    <em>{{list.date}}</em>
                </li>
            </ul>
        </section>

        <!--추천 혜택 더보기-->
        <section class="recommand">
            <h2>추천 혜택 더보기</h2>
            <p>봄님을 위한 추천 
                <a>모두 보기</a>
            </p>
            
            <ul>
                <li v-for="list in recommandList" :key="list">
                    <img v-if="list.img" :src="list.img">
                    <span>{{list.title}}</span>
                    <strong>{{list.subtitle}}</strong>
                    <em>{{list.limit}}</em>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SwiperList from '../components/SwiperList' 
export default {
    name: 'BenefitView',
    components:{
        SwiperList,
    },
    data: function(){
        return{
            thisMonth: '6',
        }
    },
    computed:{
        ...mapGetters([
            'getBenefits'
        ]),
        mainBenefitList(){
            let mainBenefitList = [];
            this.getBenefits.forEach(el => {
                if(el.type){
                    mainBenefitList.push(el);
                }
            });
            return mainBenefitList;
        },
        recommandList(){
            let recommandList = [];
            this.getBenefits.forEach(el => {
                if(!el.type){
                    recommandList.push(el);
                }
            });
            return recommandList;
        },
    },
    mounted(){
        this.$store.dispatch('FETCH_BENEFITS');
    }
}
</script>

<style>

</style>