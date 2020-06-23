<template>
  <div class="service">
      <h1>service</h1>
      <a class="ad">
        <p>등급 영향 없이 무료로 신용조회하세요!</p>
        <span>오늘부터 마음 놓고 내 신용점수를 확인해보세요.</span>
      </a>

      <section class="setting">
        <h2>설정</h2>
        <span>비밀번호 결제수단 고객센터</span>
      </section>
      <ServiceMenus v-for="(service, index) in serviceList" :key="index">
        <template v-slot:header>
          <h2>{{service.category}}</h2>
        </template>
        <template v-slot:body>
          <ul>
            <li v-for="menu in serviceList[index].title" :key="menu">{{menu}}</li>
          </ul>
        </template>
      </ServiceMenus>
  </div>
</template>

<script>
import ServiceMenus from '../components/ServiceMenus'
export default {
    name: 'ServiceView',
    components:{
      ServiceMenus,
    },
    data: function(){
      return{
        serviceList:[
          {
            category:'관리하기',
            title:['통합내역', '신용조회', '영수증', '청구서', '인증', '내문서함', '내차관리', '내 보험 관리']
          },
          {
            category:'준비하기',
            title:['자동차보험', '전세보험', '운전자보험', '간편보험', '운동보험']
          },
          {
            category:'빌리기',
            title:['대출비교']
          },
          {
            category:'모으기',
            title:['펀드', '동전 모으기', '부동산 소액투자', '', '신용 분산투자']
          },
          {
            category:'쓰기',
            title:['송금', '결제', '더치페이', '페이카드', '예약송금', '멤버십']
          },
          {
            category:'',
            title:['환전', '배송', '이벤트', '금융제휴', '소호결제키트']
          },
        ]
      }
    }
}
</script>

<style>

</style>