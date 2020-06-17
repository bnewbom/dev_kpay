<template>
  <div>
      <h2>충전</h2>
      <ul v-for="sum in chargeList" :key="sum">
          <li>{{sum}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'SelectDeposit',
    data: function(){
        return{
        chargeList:['100만원', '50만원', '30만원', '10만원', '최대 2,000,000원', '직접입력']
        }
    }
}
</script>

<style>

</style>