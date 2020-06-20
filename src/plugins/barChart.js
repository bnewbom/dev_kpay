import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
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