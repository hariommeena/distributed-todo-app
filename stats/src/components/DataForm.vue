<template>
  <div class="animated fadeIn">
    <br>
    <b-row >
              <b-col>
                <h4>{{field.category}}</h4>
                <div class="service-box">
                  <b-row>
                    <b-col>
                      <b-row style="padding:4px;" v-for="data in field.data">
                        <b-col style="max-width:250px;">
                          <span style="width:200px">{{data.label}}:</span>
                        </b-col>
                        <b-col>
                          <div v-if="!editmode" style="min-width:250px;">{{data.data}}</div>
                          <input
                            type="checkbox"
                            :id="data.id"
                            v-if="editmode && data.type==1"
                            v-model="data.data"
                          />
                          <label :for="data.id" style="margin-left:8px" v-if="editmode && data.type==1">{{ data.data }}</label>
                          <input
                            type="text"
                            style="width:300px;"
                            v-if="editmode && (!data.type || data.type==0)"
                            v-model="data.data"
                          />
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col style="max-width:440px;height:100px">
                            <textarea v-if="editmode" placeholder="Comments" style="padding:8px;width:400px;height:100px" v-model="field.comment"></textarea>
                            <p v-if="!editmode" style="padding:8px;height:100px">{{field.comment}}</p>
                    </b-col>
                  </b-row>
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
    },labelWidth:{
      type:String,
      default:"250px"
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
