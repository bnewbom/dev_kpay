<template>
  <div class="manage">
      <h1>자산관리</h1>

      <!--공지사항-->
      <ul class="notice">
        <li v-for="notice in noticeList" :key="notice">{{notice.title}}</li>
      </ul>

      <!--Summary-->
      <header>
        <h2>나의 순자산</h2>
        <p>계좌 속 숨겨진 돈을 찾아드려요</p> 
      </header>

      <!--최근 이용내역-->
      <section class="recent">
        <h2>최근 이용내역</h2>
        <ul>
          <li v-for="list in recentDetail" :key="list">
            <sapn>{{list.title}}</sapn>
            <span>{{list.date}}</span>
            <strong>{{list.value}}원 <em>{{list.type}}</em> </strong>
            
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
          <li class="swipe" v-for="card in cardList" :key="card">
            <span>PFM 리포트</span>
            <em>{{card.title}}</em>
            <em>{{card.content}}</em>
          </li>
        </ul>
      </section>

      <!--지출 분석-->
      <section class="spendReport">
        <h2>지출 분석
          <span>월별 지출 흐름을 한 눈에 보여드려요!</span>
          <a>확인하기</a>
        </h2>
        <ul>
          <li>카카오페이 결제 <a>0원</a></li>
          <li>카드 <a>조회하기</a></li>
          <li>현금영수증 <a>조회하기</a></li>
        </ul>
      </section>
      
      <!--신용 분석-->
      <section>
        <h2>신용 분석</h2>
        <ul>
          <li>신용점수 <a>조회하기</a></li>
          <li>보험 <a>조회하기</a></li>
        </ul>
      </section>

      <!--자산 분석-->
      <section class="assetReport">
        <h2>자산 분석
          <span>내 자산을 항목별로 분석해드려요!</span>
          <a>연결하기</a>
        </h2>
        
        <ul>
          <li>계좌 <a>0원</a></li>
          <li>투자 <a>조회하기</a></li>
          <li>내차 <a>조회하기</a></li>
          <li>대출 <a>조회하기</a></li>
        </ul>
        
        <!--ad banner-->
        <a>내 등급으로 가능한 대출은?</a>
      </section>

      <!--알림-->
      <section>
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
export default {
    name: 'ManageView',
    data: function(){
      return{
        noticeList:[
          {
            title:'공인인증서 없이 카카오뱅크로 간편조회!',
            background:'',
            url:'',
          },
          {
            title:'[카카오페이증권] 결제 알 모으면 리워드 2배!',
            background:'',
            url:'',
          },
          {
            title:'총 1천만원의 미션에 도전하라!',
            background:'',
            url:'',
          }
        ],
        recentDetail:[
          {
            title:'카카오입출금(카카오뱅크1234)',
            date:'6/11(목) 08:58',
            value:'100,000',
            type:'송금',
            thumUrl:'',
          },
          {
            title:'김모모',
            date:'6/11(목) 08:30',
            value:'+100,000',
            type:'받기',
            thumUrl:'',
          }
        ],
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
        ]
      }
    }

}
</script>

<style>

</style>