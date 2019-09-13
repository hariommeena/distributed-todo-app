<template>
  <div class="animated fadeIn">
    <b-card style="min-height:600px;">
      Total installs: {{totaluser()}}
      <b-table class="mb-0 table-outline" style="margin-bottom:12px;" responsive="sm" hover :items="date_data" :fields="countField" head-variant="light">        
          <div slot="date" slot-scope="data">
              <div>
                  {{data.item.date | moment("D MMM YYYY hh:mm:ss")}} 
              </div>
          </div>
      </b-table>
      <!-- <b-table class="mb-0 table-outline" style="margin-bottom:12px;" responsive="sm" hover :items="customer_data" :fields="resultFields" head-variant="light">        
          <div slot="ownerId" slot-scope="data">
              <div style="color:red">
                  {{data.item.ownerId}}
              </div>
          </div>
          <div slot="registrationDate" slot-scope="data">
              <div>
                  {{data.item.registrationDate | moment("D MMM YYYY hh:mm:ss")}} 
              </div>
          </div>
      </b-table> -->
    </b-card>
  </div>
</template>

<script>
import MultiBox from "./MultiBox.vue";
import DataForm from "./DataForm.vue";
import axios from "axios";
import moment from "moment"
import Datepicker from 'vuejs-datepicker';
import {releaseTypes,releaseJudgementServices,dashboardApiBaseUrl} from './utils'
import {sheetTemplate,getEmptyTemplate,customer_data,byDate} from './templates'

let apiBaseUrl = dashboardApiBaseUrl();

async function loadReleaseList() {

  var apiMetricUrl = apiBaseUrl+"release/releasesheet";
  let promise = await axios.get(apiMetricUrl);
  let allReleaseDocs = sortReleaseList(promise.data);
  
  let allRevisions= {};
  let latestRevisions= {};
  let latest = {},time=-1;

  for(let i=0;i<allReleaseDocs.length;i++){
    let releaseDoc = allReleaseDocs[i];
    releaseDoc.judgement_at = new Date(Number(releaseDoc.judgement_at));
    releaseDoc.iteration_start = new Date(Number(releaseDoc.iteration_start));
    releaseDoc.iteration_end = new Date(Number(releaseDoc.iteration_end));
    if(latestRevisions[releaseDoc.tag] && latestRevisions[releaseDoc.tag].saved_at < releaseDoc.saved_at){
      latestRevisions[releaseDoc.tag] = releaseDoc;
    }else if(!latestRevisions[releaseDoc.tag]){
      latestRevisions[releaseDoc.tag] = releaseDoc;
    }
    if(allRevisions[releaseDoc.tag]){
      allRevisions[releaseDoc.tag].push(releaseDoc);
    }else{
      allRevisions[releaseDoc.tag] = []
      allRevisions[releaseDoc.tag].push(releaseDoc);
    }
    if(time<releaseDoc.saved_at){
      time = releaseDoc.saved_at;
      latest = releaseDoc;
    }
    // console.log(releaseDoc.service_version)
  }

  return {
    selectTarget : latest,
    allRevisions:allRevisions,
    latestRevisions:latestRevisions,
  };
}

async function saveReleaseDoc(selectedReleaseDoc,user,password,state){
  
  let saveObj = {
    releaseSheet:selectedReleaseDoc,
    username:user,
    password:password
  }

  saveObj.releaseSheet.judgement_at = selectedReleaseDoc.judgement_at.getTime().toString();
  saveObj.releaseSheet.iteration_start =  selectedReleaseDoc.iteration_start.getTime().toString();
  saveObj.releaseSheet.iteration_end =  selectedReleaseDoc.iteration_end.getTime().toString();
  saveObj.releaseSheet.state = state;

  try{
    await axios({
      method: 'post',
      url: apiBaseUrl+'release/releasesheet',
      data: JSON.stringify(saveObj),
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });
    // let response = await axios.post(apiBaseUrl+'release/releasesheet', JSON.stringify(saveObj));
  }catch(error){
    console.log(error)
  }
}

async function loadReleaseCandidates() {

  var apiMetricUrl = apiBaseUrl+"release/releasetargets";
  let promise = await axios.get(apiMetricUrl);
  let targetVersions = sortReleaseList(promise.data);

  return targetVersions.sort(function(a, b){
      var keyA = a.version;
          var keyB = b.version;
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
  });

}

function sortReleaseList(releaseList){
  return releaseList.sort(function(a, b){
      var keyA = a.tag;
      var keyB = b.tag;
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
  })
}

async function refreshTestResult(stage, serviceName, serviceVersion) {
  const params = {
    stage: stage.toLowerCase(),
    service: serviceName,
    version: serviceVersion
  };
  let productDeployedVersion = {};
  return await axios(apiBaseUrl + "version/servicetestresult", {
    params: {
      ...params
    }
  }).then(
    ({ data }) => {
      if (data && data.length > 0) return data[0];
      else return null;
    },
    error => {
      console.error(error);
    }
  );
  return null;
}

async function loadApiMetrics(iterationStart,iterationEnd) {
    iterationStart.setHours(0, 0, 0);
    iterationEnd.setHours(0, 0, 0);

    var apiMetricUrl='https://j4qq7aor4b.execute-api.ap-southeast-1.amazonaws.com/dev/servicemetrics?startdate='+iterationStart.getTime()+'&&enddate='+iterationEnd.getTime()
    let promise = await axios.get(apiMetricUrl); 
    let apiMetricMap = promise.data;
    return apiMetricMap;

}

async function loadSonarQubeData(service, version) {
  var apiMetricUrl =
    "https://j4qq7aor4b.execute-api.ap-southeast-1.amazonaws.com/dev/sonarqubedata?service=" +
    service +
    "&&version=" +
    version;
  let promise = await axios.get(apiMetricUrl);

  let sonarData = promise.data;
  if (!sonarData || sonarData.length < 1) return null;
  let resultData = [];
  for (let i = 0; i < sonarData.data.length; i++) {
    resultData.push({
      id: sonarData.data[i].id,
      label: sonarData.data[i].id.replace("_", " "),
      data: sonarData.data[i].data
    });
  }
  let res = {
    category: "Sonar Qube",
    data: resultData
  };
  return res;
}

export default {
  props: {
    iteration: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function
      default: function() {
        let startdate = new Date("2019-08-22");
        let enddate = new Date("2019-09-02");
        enddate.setHours(0, 0, 0);
        startdate.setHours(0, 0, 0);
        console.log(startdate);
        return { startdate: startdate, enddate: enddate };
      }
    }
  },
  components: {
    MultiBox,
    Datepicker,
    DataForm
  },
  created: async function() {
    this.repaint()
  },
  methods: {
    repaint: async function(){
        this.editmode = false;
        let revisions = await loadReleaseList();
        this.latestRevisions = revisions.latestRevisions;
        this.allRevisions = revisions.allRevisions;
        this.releaseVersions = await loadReleaseCandidates();
        await this.showReleaseSheet(revisions.selectTarget);
        this.projectDetails = {};
        for(let i=0;i<this.releaseVersions.length;i++){
          this.projectDetails[this.releaseVersions[i].version] = this.releaseVersions[i].projectDetail
        }
    },
      showData: function(){
          alert(JSON.stringify(this.inputData));
          this.editmode=false
      },
    showReleaseSheet: async function(release) {
      this.editmode = release.state == 0;
      this.selectedRelease = release;
      this.inputData = sheetTemplate();
      for (let [key, value] of Object.entries(this.inputData)) {
          if(release.templateData && release.templateData[key]){            
            this.inputData[key] = release.templateData[key];
          }
      }
      // await this.fillAvailableData();
    },
    save: async function() {
      if(!this.selectedRelease.tag){
        alert('release tag is empty')
      }
      this.selectedRelease['templateData'] = this.inputData;
      this.selectedRelease.tag = this.selectedRelease.tag.trim()
      try{
        this.selectedRelease.state = '1';
        let saveResponse = await saveReleaseDoc(this.selectedRelease,this.username,this.password,'1');
      }catch(error){
        console.log(error)
      }
      this.fullscreen=false;
      this.repaint();
    },
    approve: async function() {
      try{
        this.selectedRelease.state = '3';
        let saveResponse = await saveReleaseDoc(this.selectedRelease,this.username,this.password,'3');
      }catch(e){
        console.log(e);
      }
      this.repaint();
    },
    fillAvailableData: async function(){
      // if(this.selectedRelease && this.selectedRelease.service_version){
      //   let sonarqubedata = await loadSonarQubeData('ac-ebm',this.selectedRelease.service_version);
      //   this.inputData.sonarQube.data = sonarqubedata.data;
      //   let apiMetrics = await loadApiMetrics(this.selectedRelease.iteration_start,this.selectedRelease.iteration_end);
      //   this.inputData.apiMetrics.data = apiMetrics.data;
      // }
    },
    startRelease: function() {
      let emptyRelease = getEmptyTemplate();
      this.inputData = sheetTemplate();
      this.latestRevisions[emptyRelease.tag] = emptyRelease;
      this.allRevisions[emptyRelease.tag] = []
      this.allRevisions[emptyRelease.tag].push(emptyRelease)
      this.selectedRelease = emptyRelease;
      this.editmode = true;
    },
    totaluser: function() {
      let count = 0;
      for(let [key,value] of Object.entries(this.date_data)){
        count+=value.count;
      }
      return count;
    }
  },
  data: function() {
    return {
      testData: [],      
      editmode: true,
      username:'hari_om',
      password:'test',
      nonFunctionalTest: {
        status: "pass",
        tests: []
      },
      showTestResults: true,
      functionalTest: {
        status: "pass",
        tests: []
      },
      fullscreen:false,
      sideStyle:{
        maxWidth:"400px",
        display:"block"
      },
      releaseList: [],
      isActive: false,
      boolfalse:false,
      loading: true,
      selectedRelease: {},
      releaseVersions:[],
      releaseJudgementServices:releaseJudgementServices(),
      customer_data: Object.values(customer_data()),
      date_data: Object.values(byDate()),
      releaseTypes: releaseTypes(),
      inputData: sheetTemplate(),
      allRevisions: {},
      latestRevisions: {},
      projectDetails: {},
      countField: {
          date: {
              label: 'phone',
              sortable: true,
          },
          count: {
              label: 'name',
              sortable: true
          },
      },
      resultFields: {
          ownerId: {
              label: 'phone',
              sortable: true,
          },
          name: {
              label: 'name',
              sortable: true
          },
          customerCount: {
              label: 'count',
              sortable: true,
          },
          registrationDate: {
              label: 'registrationDate',
              sortable: true,
          },
      }
    };
  }
};
</script>
<style lang="scss">
  @import './../assets/css/form.css';
</style>
