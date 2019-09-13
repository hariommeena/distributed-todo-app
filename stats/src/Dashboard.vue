<template>
  <div class="animated fadeIn">
    <b-card :header="group.header" v-for="group in versionComparables">
      <b-card-group columns class="card-columns ">
        <b-card :header="comparable.pointLabel" class="mb-2" v-for="comparable in group.chart">
          <div class="chart-wrapper">
            <LineChart :pointLabel="comparable.pointLabel" :versionList="comparable.versionList" :dataPoints="comparable.dataPoints" :chartId="comparable.pointLabel" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300">              
            </LineChart>
          </div>
        </b-card>
      </b-card-group>
    </b-card>         
  </div>
</template>

<script>
import LineChart from './charts/LineChart'
import {sheetTemplate,getVersionComparables} from './templates'

export default {
  name: 'dashboard',
  components: {
    LineChart,
  },
  data: function () {
    return {
      versionComparables:{}
    }
  },
  created: function() {
    this.versionComparables = getVersionComparables();
    console.log(this.versionComparables)
  },
}
</script>

<style>
  .card-columns {
    -webkit-column-count: 4;
    column-count: 4;
  }
</style>
