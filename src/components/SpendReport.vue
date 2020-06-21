<template>
  <div class="small">
    <bar-chart 
      :chart-data="datacollection" 
      :options="$options.options" 
      :height="120"></bar-chart>
  </div>
</template>

<script>
  import barChart from '../plugins/barChart'

  const options = {
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 30,
            bottom: 0
        }
    },
    tooltips:{ 
      yAlign: 'bottom',
      displayColors: false,
      callbacks: {       
        title: function() {
          return;
        },
        label: function(tooltipItem, data) {
            let label = data.datasets[tooltipItem.datasetIndex].label || '';

            if (label) {
                label = '';
            }
            label += Math.round(tooltipItem.yLabel * 100) / 100;
            return label;
        }
      },
    }, 
    legend: { /*상단 라벨*/
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {  /*범례*/
          beginAtZero: true,
          display:false,
        },
        gridLines: { /*그리드*/
          drawBorder: false,
          zeroLineColor: '#727ed4',
          drawTicks: false,
          display: true,
          color:'#727ed4'
        },

      }],
      xAxes: [ {
        ticks:{
          fontSize:12,
          fontColor: '#fff',
          padding:10,
        },
        gridLines: {
          drawTicks: false,
          display: false
        },
      }],
    },
  }
  export default {
    name:'SpendReport',
    options,
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
          labels: ['1월','2월','3월','4월','5월','6월'],
          datasets: [
            {
              type:'line',
              label: 'Data One',
              borderWidth: 1,
              borderColor:'#fff',
              backgroundColor:'transparent',
              lineTension:0,
              data: [100350,201820,250000,150000,170000,185000]
            },
            {
              type:'bar',
              label: 'Data One',
              barThickness:'15',
              backgroundColor: '#333c80',
              data: [100350,201820,250000,150000,170000,185000]
            },
            
          ],
        }
      },
    }
  }
</script>

<style>
/* .small canvas{height:140px !important;} */
</style>