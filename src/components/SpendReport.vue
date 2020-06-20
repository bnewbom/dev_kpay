<template>
  <div class="small">
    <bar-chart :chart-data="datacollection" :options="chartOptions"></bar-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
  import barChart from '../plugins/barChart'

  export default {
    name:'SpendReport',
    components: {
      barChart
    },
    data () {
      return {
        datacollection: null,
       // drawOnChartArea: true,
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),],
          datasets: [
            {
              label: 'Data One',
              //backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    height:200px;
    margin:  150px auto;
  }
</style>