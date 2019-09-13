<template>
  <div class="animated fadeIn">
    <br>
    <b-row>
        <b-col>
          <h4>{{field.category}}<i class="icon-settings"></i></h4>
          <b-row style="margin:10px">
            <b-col style="max-width:200px">
              <span>Data Source</span>
            </b-col>
            <b-col style="padding:10px">
              <span style="margin-right:120px;margin-top:10px">API Endpoint</span>
              <input style="width:70%" v-model="field.dataSource" type="text" placeholder="api url e.g. https://api-dashboard.worksap.com/servicemetrics"/>
              <div style="margin-top:10px">
                <span  style="margin-right:20px;margin-top:10px">Test<span class="text-muted">(URL with query parameters)</span>:</span>
                <a style="width:70%" href="field.dataSource" target="_blank">{{field.dataSource}}/{{field.category}}</a>
              </div>
            </b-col> 
            <b-col style="max-width:40%">
              <span style="margin-right:20px;margin-top:10px">Expected Output:</span>
              <br>
              <textarea style="width:100%" disabled >{{JSON.stringify(field.data)}}</textarea>
            </b-col>           
          </b-row>
          <div style="padding:15px;margin-left:10px" class="box-white box-square box-small box-vertical box-space-medium box-stretch box-start box-bordered">
            <div class="box-small box-horizontal box-stretch box-center" style="min-height: 100px;">
              <!-- -->
              <div v-for="data in field.data" class="box-small box-horizontal box-stretch box-center" style="flex: 1 1 0px;">
              <div class="box-small box-vertical box-spacing-small box-stretch box-center">
                  <h1 v-if="!editmode && data.data" class="text-h1">{{data.data}}<span style="font-size:18px;">{{data.unit}}</span></h1>
                  <h1 v-if="!editmode && !data.data" class="text-h1">NA</h1>
                  <h1><input v-if="editmode" type="text" style="height:60px;width:130px;text-align:center" v-model="data.data"/></h1>
                  <div class="text-body text-size-small">
                  <span >{{data.label}}</span><br>
                  <span class="text-muted">{{data.secondaryLabel}}</span>
                  </div>
              </div>
              </div>
              <div class="box-small box-vertical box-spacing-small box-stretch box-center" style="width:400px;height:100px">                                
                  <textarea v-if="editcomment" placeholder="Comments" style="padding:8px;height:100px" v-model="field.comment"></textarea>
                  <p v-if="!editcomment" style="padding:8px;height:100px">{{field.comment}}</p>
              </div>
              <!-- -->
            </div>
          </div>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: function() {        
        return { };
      }
    },editmode:{
      type:Boolean,
      default:false
    },editcomment:{
      type:Boolean,
      default:false
    }
  },
  created: async function() {
  },
  data: function() {
    return {
    }
  }
};
</script>
