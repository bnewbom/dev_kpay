import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['options'],
  options: {
    responsive: true,
    maintainAspectRatio: false
  },
  mounted () {
    this.renderChart(this.chartData, this.option)
  }
}