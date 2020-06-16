<template>
  <div>
      <h1>자산관리</h1>

      <!--Summary-->
      <section>
        <a>공지사항</a>
        <a>
          <span>나의 순자산</span>
          <p>계좌 속 숨겨진 돈을 찾아드려요</p>
        </a>
      </section>

      <!--최근 이용내역-->
      <section>
        <article>
          <a>최근 이용내역</a>
          <ul>
            <li>
              카카오입출금(카카오뱅크77**)
              <span>6/11(목) 06:00</span>
              <strong>100,000<em>원</em></strong>
              <em>송금</em>
            </li>
            <li>
              우렁각시
              <span>6/11(목) 06:00</span>
              <strong>+100,000<em>원</em></strong>
              <em>받기</em>
            </li>
          </ul>
        </article>
      </section>

      <!--카드 리포트-->
      <section>
        <ul>
          <li>이제부터 신한카드 결제금액은 여기서 챙겨드려요 <span>확인하기</span></li>
          <li>PFM 리포트</li>
        </ul>
      </section>

      <!--지출 분석-->
      <section>
        <ul>
          <li>지출분석 <a>확인하기</a></li>
          <li>카카오페이 결제 <a>0원</a></li>
          <li>카드 <a>조회하기</a></li>
          <li>현금영수증 <a>조회하기</a></li>
        </ul>
      </section>
      
      <!--신용 분석-->
      <section>
        <ul>
          <li>신용점수 <a>조회하기</a></li>
          <li>보험 <a>조회하기</a></li>
        </ul>
      </section>

      <!--자산 분석-->
      <section>
        <ul>
          <li>자산분석 <a>연결하기</a></li>
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

}
</script>

<style>

</style>