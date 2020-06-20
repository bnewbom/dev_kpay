<template>
  <div class="small">
    <doughnut-chart 
      :chart-data="datacollection" 
      :height="180"
      :options="chartOptions"></doughnut-chart>
  </div>
</template>

<script>
  import doughnutChart from '../plugins/doughnutChart'

  export default {
    name:'AssetReport',
    components: {
      doughnutChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              //backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
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