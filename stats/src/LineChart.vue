<script>
import { Line } from 'vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { random } from '@/shared/utils'

export default {
  extends: Line,
  props: {
    height: {
      type: String,
      default: 300
    },pointLabel:{
      type:String,
      default:'label'
    },versionList:{
      type:Array,
      default: function() {        
        return [];
      }
    },dataPoints:{
      type:Array,
      default: function() {        
        return [];
      }
    }
  },
  mounted () {
    const brandSuccess = getStyle('--success') || '#4dbd74'
    const brandInfo = getStyle('--info') || '#20a8d8'
    const brandDanger = getStyle('--danger') || '#f86c6b'

    let elements = 27
    const data1 = []
    const data2 = []
    const data3 = []

    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 200))
      data2.push(random(80, 100))
      data3.push(65)
    }
    this.renderChart({
      labels: this.versionList,
      datasets: [
        {
          label: this.pointLabel,
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 1,
          data: this.dataPoints
        }
      ]
    }, {
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem, chart) {
            return { 
              backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor 
            }
          }
        }
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 10,
            stepSize: Math.ceil(1000000 / 10),
            max: 1000000
          },
          gridLines: {
            display: true
          }
        }]
      },
      elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 5,
            hoverRadius: 4
          }
        }
    })
  }
}
</script>
