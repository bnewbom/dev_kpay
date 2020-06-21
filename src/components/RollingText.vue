<template>
    <div class="rolling_box">
        <ul id ="rolling_box">
            <li class="card_sliding" id ="first"><p></p></li>
            <li class="" id ="second"><p></p></li>
            <li class="" id ="third"><p></p></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'RollingText',
    data: function(){
        return{
            rollingData:[
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
                },
            ],
        }
    },
    mounted(){
        let timer = 3000 // 롤링 주기 
        let first = document.getElementById('first'),
            second = document.getElementById('second'),
            third = document.getElementById('third')
        let move = 2
        let dataCnt = 1
        let listCnt = 1

        first.children[0].innerHTML = this.rollingData[0].title

        setInterval(() => {
            if(move == 2){
                first.classList.remove('card_sliding')
                first.classList.add('card_sliding_after')

                second.classList.remove('card_sliding_after')
                second.classList.add('card_sliding')

                third.classList.remove('card_sliding_after')
                third.classList.remove('card_sliding')

                move = 0
            } else if (move == 1){
                first.classList.remove('card_sliding_after')
                first.classList.add('card_sliding')

                second.classList.remove('card_sliding_after')
                second.classList.remove('card_sliding')

                third.classList.remove('card_sliding')
                third.classList.add('card_sliding_after')

                move = 2
            } else if (move == 0) {
                first.classList.remove('card_sliding_after')
                first.classList.remove('card_sliding')

                second.classList.remove('card_sliding')
                second.classList.add('card_sliding_after')

                third.classList.remove('card_sliding_after')
                third.classList.add('card_sliding')

                move = 1
            }
            
            if(dataCnt < (this.rollingData.length - 1)) {
                document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = this.rollingData[dataCnt].title
                    dataCnt++
            } else if(dataCnt == this.rollingData.length - 1) {
                document.getElementById('rolling_box').children[listCnt].children[0].innerHTML = this.rollingData[dataCnt].title
                dataCnt = 0
            }

            if(listCnt < 2) {
                listCnt++
            } else if (listCnt == 2) {
                listCnt = 0
            }
        }, timer);
    }
}
</script>

<style>
    .rolling_box{height:25px;}
    .rolling_box ul { width: 100%; height: 100%; overflow: hidden; position: relative;}
    .rolling_box ul li {width: 100%; height: 100%; transition: .5s; position:absolute; transition: top .75s; top: 100%; z-index: 1; background: #eee;}
    .card_sliding{top: 0 !important; z-index: 100 !important;} 
    .card_sliding_after{top: -100% !important; z-index: 10 !important;}
    .rolling_box ul li p {font-size:14px;}
    .before_slide {transform: translateY(100%);}
    .after_slide {transform: translateY(0);}
</style>