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
          labels: [10,20,25,15,17,18],
          datasets: [
            {
              type:'bar',
              label: 'Data One',
              //backgroundColor: '#f87979',
              data: [10,20,25,15,17,18]
            },
            {
              type:'line',
              label: 'Data One',
              //backgroundColor: '#f87979',
              data: [10,20,25,15,17,18]
            },
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
  }
</style>