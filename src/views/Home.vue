<template>
    <div class='home'>
        <h1>Home</h1>

        <!--이용 내역-->
        <header>
            <article>
                <h2>Pay</h2>
                <router-link to="/pay_history" target="_blank">{{deposit}}원</router-link>
                <a v-on:click="toggleCharge">충전</a>
                <div>
                    <a>업그레이드</a>
                    <a v-on:click="toggleMenu">메뉴</a>
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
                <li v-for="news in payNewsLists" 
                    :key="news" 
                    :class="[news.type === 'big'? 'bigArea' : '' ]">
                    <p>{{news.title}}</p>
                    <span>{{news.content}}</span>
                    <img v-if="news.imgUrl!==''" :src="news.imgUrl">
                </li>
            </ul>
        </section>

        <!--하단 링크-->
        <section>
            <h2>관련 사이트</h2>
            <ul class="nav">
                <li v-for="site in siteLinks" :key="site"><a>{{site}}</a></li>
            </ul>
        </section>

        <!--푸터-->
        <footer>{{footerAddress}}</footer>
        
    </div>
</template>

<script>
import SelectDeposit from '../components/SelectDeposit' 
import DetailMenu from '../components/DetailMenu' 

export default {
    name: 'HomeView',
    components: {
        SelectDeposit,
        DetailMenu,
    },
    data: function (){
        return {
            deposit: 0,
            showMenu: false,
            showChargeList: false,
            payNewsLists:[
                {
                    title:'업계 최초 인증으로 안전, 안심을 말해요',
                    content:'금융보안원 ISMS-P 인증 획득',
                    type:'big',
                    imgUrl:'',
                    background:'',
                },
                {
                    title:'통신요금 납부도 카카오페이로 하세요',
                    content:'매월 청구서에서 챙겨드려요',
                    type:'default',
                    imgUrl:'https://image.flaticon.com/icons/svg/1271/1271847.svg',
                    background:'',
                },
                {
                    title:'공인인증서 대신 카카오페이 인증으로!',
                    content:'간편하게 인증서 발급해보세요',
                    type:'default',
                    imgUrl:'',
                    background:'',
                },
                {
                    title:'내 보험 몇개나 있지?',
                    content:'한눈에 확인하고 진단까지',
                    type:'default',
                    imgUrl:'',
                    background:'',
                },
                {
                    title:'예탁금 예금자보호 안전한 금융생활',
                    content:'계좌 업그레이드 시 한정 혜택',
                    type:'big',
                    imgUrl:'',
                    background:'',
                },
            ],
            siteLinks:['고객센터', '신고하기', '홈페이지', '페이스북'],
            footerAddress:'경기 성남시 분당구 판교역로 152 알파돔타워 12층 (우)13529'
        }
    },
    methods:{
        toggleMenu: function(){
            this.showMenu = true;
        },
        toggleCharge: function(){
            this.showChargeList = true;
        }
    }

}
</script>

<style>

</style>