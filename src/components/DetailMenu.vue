<template>
  <div>
    <h2>메뉴</h2>
    <ul v-for="menu in menuList" :key="menu">
      <li>{{menu}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'DetailMenu',
  data: function(){
    return{
      menuList:['내역 보기', '연결계좌 관리', '예약충전', '잔액 숨기기']
    }
  }

}
</script>

<style>

</style>