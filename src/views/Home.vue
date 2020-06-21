<template>
    <div class='home'>
        <h1>Home</h1>
        <!--이용 내역-->
        <header>
            <article>
                <h2>Pay</h2>
                <router-link to="/pay_history" target="_blank" class="deposit">{{getAccount[0].balance}}원</router-link>
                <BottomSheet></BottomSheet>
                <div class="menu">
                    <a class="upgrade">
                        <span>업그레이드</span>
                        계좌로 연 0.6% 혜택받기
                    </a>
                </div>
            </article>
            <ul>
                <li>송금</li>
                <li>결제</li>
                <li>투자</li>
                <li>간편보험</li>
            </ul>
        </header>

        <!--충전-->
        <select-deposit v-if="showChargeList"></select-deposit>
        
        <!--메뉴 더보기-->
        <detail-menu v-if="showMenu"></detail-menu>
        
        <!--페-이로운 소식-->
        <h2 class="newsH2">페-이로운 소식</h2>
        <section>
            <ul class="payNews">
                <li v-for="news in getPayNews" 
                    :key="news" 
                    :class="[news.type? 'bigArea' : '' ]"
                    :style="[news.type]? { backgroundImage: 'url(' + news.background + ')' } :''">
                    <p>{{news.title}}</p>
                    <span>{{news.subtitle}}</span>
                    <img v-if="news.img" :src="news.img">
                </li>
            </ul>
        </section>

        <!--하단 링크-->
        <section class="nav">
            <h2>관련 사이트</h2>
            <ul>
                <li v-for="site in siteLinks" :key="site"><a>{{site}}</a></li>
            </ul>
        </section>

        <!--푸터-->
        <footer>{{footerAddress}}</footer>
        
    </div>
</template>

<script>
import BottomSheet from '../components/BottomSheet' 

import { mapGetters } from 'vuex';

export default {
    name: 'HomeView',
    components: {
        BottomSheet,
    },
    computed:{
        ...mapGetters([
            'getPayNews',
            'getAccount',
        ]),
    },
    data: function (){
        return {
            showMenu: false,
            showChargeList: false,
            siteLinks:['고객센터', '신고하기', '홈페이지', '페이스북'],
            footerAddress:'경기 성남시 분당구 판교역로 152 알파돔타워 12층 (우)13529'
        }
    },
    methods:{

    },
    mounted(){
        this.$store.dispatch('FETCH_PAYNEWS');
        this.$store.dispatch('FETCH_ACCOUNT');
    }
}
</script>)

<style>

</style>