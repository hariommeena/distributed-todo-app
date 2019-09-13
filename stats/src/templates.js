// import moment from 'moment'
function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function getEmptyTemplate(){

    let startdate = new Date();
    startdate.setDate(startdate.getDate()-7);

    return {
      tag: "EBM-XXX",
      summary:'',
      saved_at: "",
      judgement_at: new Date(),      
      saved_by: "-",
      approved_at: "",
      approved_by: "-",      
      release_type: "Internal Release",      
      state:0,
      service_name: "ac-ebm",
      service_version: "1.0.0548.20190902.082538",
      iteration_start: startdate,
      iteration_end: new Date(),
      templateData: {}
    };
}

// function readableDateTime(date){
//   let m = moment(date, 'Do MMM, YYYY h:mm a')
//   return m.format('Do MMM, YYYY h:mm a')
// }

// function readableDate(date){
//   let m = moment(date, 'Do MMM, YYYY')
//   return m.format('Do MMM, YYYY')
// }

 export function getVersionComparables(){
  let latest = [{version:'12.4.0',templateData:sheetTemplate()},{version:'12.4.02',templateData:sheetTemplate()},{version:'1.4.02',templateData:sheetTemplate()},{version:'15.4.0',templateData:sheetTemplate()},{version:'1.4.0',templateData:sheetTemplate()},{version:'1.3.0',templateData:sheetTemplate()},{version:'1.2.0',templateData:sheetTemplate()}];
  let comparables = {};//{id:{pointLabel:'',dataPoints:[],versionList:[]}}
  //pointLabel:'label', 
  
  //dataPoints:[234,56,677],
  for(let idx=0;idx<latest.length;idx++){
    let key = latest[idx].version;
    let template = latest[idx].templateData;
    // let value = template.templateData
    for(let [keyObj,value] of Object.entries(template)){
      for(let i=0;i<value.data.length;i++){
        let dataField = value.data[i];
        if(dataField.type == 0 && !isNaN(dataField.data)){
          dataField.data = random(50, 966650)
          let id = dataField.id 
          if(!comparables[id] && !isNaN(dataField.data)){
            comparables[id] = {
              pointLabel: dataField.label,
              header: value.category,
              dataPoints: [dataField.data],
              versionList: [key],
            };
          }else if(comparables[id]){
            if(!isNaN(dataField.data)){
              comparables[id].dataPoints.push(dataField.data)
              if(!comparables[id].versionList.includes(key)){
                comparables[id].versionList.push(key)
              }
            }
          }
        }
      }
    }
  }
   
  let sorted = {}
  Object.keys(comparables).sort().forEach(function(key) {
    if(!sorted[comparables[key].header]){
      sorted[comparables[key].header] = {
        header:comparables[key].header,
        chart:[]
      }
    }
    sorted[comparables[key].header].chart.push(comparables[key]);
  });
  console.log(JSON.stringify(sorted))
  return sorted;
}

getVersionComparables()

export function sheetTemplate() {
  return {
    devOverview: {
      category: "Development Overview",
      comment:'',
      data: [
        {
          id: "Number of Features for release",
          type: 0,
          label: "Number of Features for release",
          data: ""
        },
        {
          id: "Number of Bugs for release",
          type: 0,
          label: "Number of Bugs for release",
          data: ""
        },
        {
          id: "Release notes",
          type: 1,
          label: "Release notes",
          data: true
        },
        {
          id: "Swagger docs updated",
          type: 1,
          label: "Swagger docs updated",
          data: true
        }
      ]
    },
    sonarQube: {
      category: "SonarQube",
      comment:'',
      data: []
    },
    iterationBugs: {
      category: "Bugs in this iteration",
      comment:'',
      data: [
        {
          id: "iteration_bugs_raised",
          type: 0,
          comparable:true,
          label: "Count",
          secondaryLabel:"(Bugs Raised)",
          data: ""
        },
        {
          id: "critical",
          type: 0,
          comparable:true,
          label: "Critical",
          secondaryLabel:"(Bugs Put-Off)",
          data: ""
        },
        {
          id: "normal",
          type: 0,
          label: "Normal",
          secondaryLabel:"(Bugs Put-Off)",
          data: ""
        },
        {
          id: "low",
          type: 0,
          secondaryLabel:"(Bugs Put-Off)",
          label: "Low",
          data: ""
        }
      ]
    },
    deploymentMetrics: {
      category: "Deployment Statistics",
      comment:'',
      data: [
        {
          id: "deployment_count",
          type: 0,
          secondaryLabel:"",
          unit:' %',
          comparable:true,
          label: "Total Deployments",
          data: ""
        },{
          id: "deployment_success",
          type: 0,
          comparable:true,
          secondaryLabel:"",
          unit:' %',
          label: "Success",
          data: ""
        },{
          id: "lead_time",
          type: 0,
          secondaryLabel:"",
          unit:'',
          label: "Lead Time",
          data: ""
        },{
          id: "cycle_time",
          type: 0,
          secondaryLabel:"",
          unit:' %',
          label: "Cycle Time",
          data: ""
        }
      ]
    },
    apiMetrics:{
      category: "API Metrics",
      comment:'',
      data: [
        {
          id: "request_count",
          type: 0,
          comparable:true,
          secondaryLabel:"(Sum)",
          label: "Requests",
          data: ""
        },{
          id: "error_count",
          type: 0,
          comparable:true,
          secondaryLabel:"(Sum)",
          label: "Error Count",
          data: ""
        },{
          id: "availability",
          type: 0,
          comparable:true,
          secondaryLabel:"(%)",
          unit:' %',
          label: "Availability",
          data: ""
        },
        {
          id: "latency_average",
          type: 0,
          comparable:true,
          secondaryLabel:"(Average)",
          label: "Latency",
          unit:'ms',
          data: ""
        },{
          id: "latency_p90",
          type: 0,
          secondaryLabel:"(p90)",
          unit:'ms',
          label: "Latency",
          data: ""
        }
      ]
    },
    unitTest: {
      category: "Unit Test",
      comment:'',
      data: [
        {
          id: "backend_testcount",
          type: 0,
          label: "Number of test case",
          data: "",
          secondaryLabel:"(backend)"
        },
        {
          id: "backend_testcoverage",
          type: 0,
          label: "Test coverage",
          data: "",
          secondaryLabel:"(backend)"
        },
        {
          id: "frontend_testcount",
          type: 0,
          label: "Number of test case",
          data: "",
          secondaryLabel:"(frontend)"
        },
        {
          id: "frontend_testcoverage",
          type: 0,
          label: "Test coverage",
          data: "",
          secondaryLabel:"(frontend)"
        }
      ]
    },
    backwardCompatibility: {
      category: "Backward Compatibility",
      comment:'',
      data: [
        {
          id: "api",
          type: 1,
          label: "API is BC",
          data: true
        },
        {
          id: "db_schema",
          type: 1,
          label: "DB Schema is BC",
          data: true
        },
        {
          id: "es_index",
          type: 1,
          label: "ES Index is BC",
          data: true
        }
      ]
    },
    documentation: {
      category: "Documentation",
      comment:'',
      data: [
        {
          id: "installation_flow_defined",
          type: 1,
          label: "Env Installation flow is defined/updated",
          data: true
        },
        {
          id: "versionup_flow_defined",
          type: 1,
          label: "Env Version Up flow is defined/updated",
          data: true
        },
        {
          id: "add_tenant_policy_defined",
          type: 1,
          label: "Add Tenant policy is defined/updated",
          data: true
        }
      ]
    },
    migration: {
      category: "Migration",
      data: [
        {
          id: "migration_required",
          type: 1,
          label: "Migration Required",
          data: true
        },
        {
          id: "migration_verified",
          type: 1,
          label: "Migration verified",
          data: true
        }
      ]
    },
    userManual: {
      category: "User manual",
      data: [
        {
          id: "manual_updated",
          type: 1,
          label: "Manual updated",
          data: false
        }
      ]
    }
  }
}
