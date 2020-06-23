<template>
    <div class="benefit">
        <h1>benefit</h1>
        <!--summary-->
        <header>
            <h2>받은 혜택</h2>
            <p>{{thisMonth}}월 받은 혜택</p>
            <span>0원</span>
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
            <swiper-benefit></swiper-benefit>
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
                <li v-for="list in recommandList" :key="list" @click="showDetail(list)">
                    <img v-if="list.img" :src="list.img">
                    <span>{{list.title}}</span>
                    <strong>{{list.subtitle}}</strong>
                    <em>{{list.limit}}</em>
                </li>
            </ul>

            <ModalComponent class="benefit_popup" v-if="this.showModal" @close="showModal=false">
                <template v-slot:header>
                    <h3>{{clickedList.title}}</h3>
                </template>
                <template v-slot:body>
                    <p>{{clickedList.subtitle}}</p>
                    <span>{{clickedList.limit}}</span>
                </template>
            </ModalComponent>

        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SwiperBenefit from '../components/SwiperBenefit' 
import ModalComponent from '../components/ModalComponent' 

export default {
    name: 'BenefitView',
    components:{
        SwiperBenefit,
        ModalComponent,
    },
    data: function(){
        return{
            thisMonth: '6',
            showModal: false,
            clickedList:{
                title:'',
                subtitle:'',
                limit:''
            }
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
    methods:{
        showDetail(list){
            this.showModal = true;
            this.clickedList.title = list.title;
            this.clickedList.subtitle = list.subtitle;
            this.clickedList.limit = list.limit;

            console.log(list);
        }
    },
    mounted(){
        this.$store.dispatch('FETCH_BENEFITS');
    }
}
</script>

<style>
.benefit_popup{left:auto}
.benefit_popup span{font-size:13px; color:#525252}
</style>