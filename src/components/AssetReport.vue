<template>
  <div class="small">
    <doughnut-chart 
      :chart-data="datacollection" 
      :height="180"
      :options="$options.options"></doughnut-chart>
  </div>
</template>

<script>
  import doughnutChart from '../plugins/doughnutChart'
const options = {
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 10
        }
    },
    tooltips:{ 
      yAlign: 'bottom',
      displayColors: false,
    }, 
    legend: { /*상단 라벨*/
      position: 'right',
      labels: {
					fontColor: "#eee",
          fontSize:12,
          boxWidth:10,

				}
    },
  }
  export default {
    name:'AssetReport',
    options,
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
          labels: ['계좌', '투자', '내차', '대출'],
          datasets: [
            {
              borderWidth:0,
              //label: 'Data One',
              backgroundColor: ['#32a852', '#ffd426', '#eb5079', '#276bd9'],
              data: [50,30,10,40]
            },
          ]
        }
      },
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
  }
</style>