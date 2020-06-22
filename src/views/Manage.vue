<template>
  <div class="manage">
      <h1>자산관리</h1>
      <!--공지사항-->
      <RollingText></RollingText>
      <!--Summary-->
      <header>
        <h2>나의 순자산</h2>
        <p>4,443,302원</p> 
      </header>
      <!--최근 이용내역-->
      <section class="recent">
        <h2>최근 이용내역</h2>
        <ul>
          <li v-for="list in getHistory" :key="list">
            <img :src="list.img">
            <span>{{list.title}}</span>
            <span class="date">{{list.date}}</span>
            <strong :style="list.type ? { color: '#033fad' }: ''" >{{list.price}}원 
              <em v-if="list.type">수입</em>
              <em v-else>지출</em>
            </strong>
          </li>
        </ul>
      </section>

      <!--카드 리포트-->
      <section class="cardReport">
        <h2>카드 리포트</h2>
        <ul>
          <li>
            <span>이제부터 신한카드 결제금액은 여기서 챙겨드려요</span> 
            <a>확인하기</a>
          </li>
          <li class="swipe">
            <span>PFM 리포트</span>
            <swiper-pfm></swiper-pfm>
          </li>
        </ul>
      </section>

      <!--지출 분석-->
      <section class="spendReport">
        <h2>
          <p>지출 분석</p>
          <spend-report></spend-report>
          <!-- <span>월별 지출 흐름을 한 눈에 보여드려요!</span>
          <a>확인하기</a> -->
        </h2>
        <ul>
          <li>카카오페이 결제 <a>0원</a></li>
          <li>카드 <a>조회하기</a></li>
          <li>현금영수증 <a>조회하기</a></li>
        </ul>
      </section>
      
      <!--신용 분석-->
      <section class="creditReport">
        <h2>신용 분석</h2>
        <ul>
          <li>신용점수 <a>조회하기</a></li>
          <li>보험 <a>조회하기</a></li>
        </ul>
      </section>

      <!--자산 분석-->
      <section class="assetReport">
        <h2>
          <p>자산 분석</p>
          <asset-report></asset-report>
          <!-- <span>내 자산을 항목별로 분석해드려요!</span>
          <a>연결하기</a> -->
        </h2>
        
        <ul>
          <li>계좌 <a>0원</a></li>
          <li>투자 <a>조회하기</a></li>
          <li>내차 <a>조회하기</a></li>
          <li>대출 <a>조회하기</a></li>
        </ul>
        
        <!--ad banner-->
        <a class="ad">내 등급으로 가능한 대출은?</a>
      </section>

      <!--알림-->
      <section class="alarm">
        <h2>알림</h2>
        <ul>
          <li>연결 금융사 <a>연결하기</a></li>
          <li>금융정보 변동 알림</li>
          <li>카톡 들어올 때 업데이트</li>
        </ul>
      </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RollingText from '../components/RollingText'
import SpendReport from '../components/SpendReport'
import AssetReport from '../components/AssetReport'
import SwiperPfm from '../components/SwiperPfm' 

export default {
    name: 'ManageView',
    components:{
      RollingText,
      SpendReport,
      AssetReport,
      SwiperPfm
    },
    data: function(){
      return{

      }
    },
    computed:{
      ...mapGetters([
        'getHistory'
      ]),
    },
    mounted(){
      this.$store.dispatch('FETCH_HISTORY');
    }
}
</script>

<style>

</style>