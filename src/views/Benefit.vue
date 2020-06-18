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
            <ul>
                <li v-for="list in mainBenefitList" :key="list">
                    <span>{{list.title}}</span>
                    <span>{{list.content}}</span>
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
                    <span>{{list.store}}</span>
                    <strong>{{list.title}}</strong>
                    <em>{{list.limit}}</em>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'BenefitView',
    data: function(){
        return{
            thisMonth: '6',
            mainBenefitList:[
                {
                    title:'파리바게트',
                    content:'매일 저녁 17시~22시 20% 할인',
                    date:'~6/20',
                    imgUrl:'',
                    url:'',
                },
                {
                    title:'롯데월드',
                    content:'현장 키오스크에서 결제 시 최대 48% 할인',
                    date:'~6/30',
                    imgUrl:'',
                    url:'',
                },
                {
                    title:'LG전자 베스트샵',
                    content:'등록된 하나카드 결제 시 3% 캐시백',
                    date:'~6/30',
                    imgUrl:'',
                    url:'',
                },
                {
                    title:'전세보증보험',
                    content:'우리집 전세금 지키고 스타벅스 커피 한잔',
                    date:'~8/31',
                    imgUrl:'',
                    url:'',
                }
            ],
            recommandList:[
                {
                    imgUrl:'',
                    store:'하나은행',
                    title:'7천원+이모티콘',
                    limit:'수수료 무제한 면제계좌 개설 시'
                },
                {
                    imgUrl:'',
                    store:'카드 혜택 프로모션',
                    title:'최대 10만원 캐시백',
                    limit:'이벤트 참여 시'
                },
                {
                    imgUrl:'',
                    store:'라그릴리아',
                    title:'3만원 이상 결제 시 20% 할인',
                    limit:'최대 1만원, 매주 금/토/일'
                },
                {
                    imgUrl:'',
                    store:'하나카드',
                    title:'1만원 이상 결제 시 3천원',
                    limit:'앱카드 간편등록 기능으로 카드 등록'
                },
                {
                    imgUrl:'',
                    store:'에쓰-오일',
                    title:'선착순 2천원 할인',
                    limit:'5만원 이상 결제 시'
                },
            ],
        }
    },
}
</script>

<style>

</style>