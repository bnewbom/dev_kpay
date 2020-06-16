<template>
    <div>
        <h1>Home</h1>
        
        <!--이용 내역-->
        <section>
            <router-link to="/pay_history" target="_blank">100,000원</router-link>
            <a>충전</a>
            <a>업그레이드</a>
            <a>모달</a>
            <ul>
                <li>송금</li>
                <li>결제</li>
                <li>투자</li>
                <li>간편보험</li>
            </ul>
        </section>

        <!--충전-->
        <select-deposit></select-deposit>
        
        <!--메뉴 더보기-->
        <detail-menu></detail-menu>
        
        <!--페-이로운 소식-->
        <section>
            <ul>
                <li>
                    <p>업계 최초 인증으로 안전 안심을 말해요</p>
                    <span>금융감독원 ISMP-P 인증 획득</span>
                </li>
                <li>
                    <p>뉴스 타이틀</p>
                    <span>뉴스 요약 내용</span>
                </li>
            </ul>
        </section>

        <!--하단 링크-->
        <section>
            <ul>
                <li><a>고객센터</a></li>
                <li><a>신고하기</a></li>
                <li><a>홈페이지</a></li>
                <li><a>페이스북</a></li>
            </ul>
        </section>

        <!--푸터-->
        <footer>경기 성남시 분당구 판교역로 152 알파돔타워 12층 (우)13529</footer>
        
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
    }

}
</script>

<style>

</style>