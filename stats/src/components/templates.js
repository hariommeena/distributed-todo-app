import moment from 'moment'

export function getEmptyTemplate(){

    let startdate = new Date();
    startdate.setDate(startdate.getDate()-7);

    return {
      tag: "EBM-XXX",
      summary:' ',
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

export function readableDateTime(date){
  let m = moment(date, 'Do MMM, YYYY h:mm a')
  return m.format('Do MMM, YYYY h:mm a')
}

export function readableDate(date){
  let m = moment(date, 'Do MMM, YYYY')
  return m.format('Do MMM, YYYY')
}

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
          label: "Count",
          secondaryLabel:"(Bugs Raised)",
          data: ""
        },
        {
          id: "critical",
          type: 0,
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
          label: "Total Deployments",
          data: ""
        },{
          id: "deployment_success",
          type: 0,
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
          secondaryLabel:"(Sum)",
          label: "Requests",
          data: ""
        },{
          id: "error_count",
          type: 0,
          secondaryLabel:"(Sum)",
          label: "Error Count",
          data: ""
        },{
          id: "availability",
          type: 0,
          secondaryLabel:"(%)",
          unit:' %',
          label: "Availability",
          data: ""
        },
        {
          id: "latency_average",
          type: 0,
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

export function byDate(){
  return {"1566576000000":{"date":1566576000000,"count":2},"1566662400000":{"date":1566662400000,"count":13},"1566748800000":{"date":1566748800000,"count":10},"1566835200000":{"date":1566835200000,"count":8},"1566921600000":{"date":1566921600000,"count":15},"1567008000000":{"date":1567008000000,"count":13},"1567094400000":{"date":1567094400000,"count":6},"1567180800000":{"date":1567180800000,"count":7},"1567353600000":{"date":1567353600000,"count":51},"1567440000000":{"date":1567440000000,"count":27},"1567526400000":{"date":1567526400000,"count":14},"1567612800000":{"date":1567612800000,"count":13},"1567699200000":{"date":1567699200000,"count":14},"1567785600000":{"date":1567785600000,"count":16},"1567872000000":{"date":1567872000000,"count":16},"1567958400000":{"date":1567958400000,"count":15},"1568044800000":{"date":1568044800000,"count":41},"1568131200000":{"date":1568131200000,"count":49},"1568217600000":{"date":1568217600000,"count":23},"1568304000000":{"date":1568304000000,"count":58}}
}

export function customer_data(){
  return {"811823381":{"ownerId":"811823381","name":"Duta Sofa","registrationDate":1568197070386,"customerCount":1},"818850521":{"ownerId":"818850521","name":"warung mario","registrationDate":1567960472117,"customerCount":1},"838199477":{"ownerId":"838199477","name":"Warung Selfi","registrationDate":1566737037927,"customerCount":0},"81296978362":{"ownerId":"81296978362","name":"TOKO IMAM CELLULER ","registrationDate":1566630641350,"customerCount":25},"81316170650":{"ownerId":"81316170650","name":"gunawan motor","registrationDate":1566631499610,"customerCount":9},"81280049221":{"ownerId":"81280049221","name":"warung oyo","registrationDate":1566723994856,"customerCount":0},"82111702462":{"ownerId":"82111702462","name":"Dev Cellular Ciputat","registrationDate":1566726392310,"customerCount":3},"81284566757":{"ownerId":"81284566757","name":"april cell ","registrationDate":1566731251408,"customerCount":0},"85716052813":{"ownerId":"85716052813","name":"jastipnae","registrationDate":1566732208159,"customerCount":40},"81286875950":{"ownerId":"81286875950","name":"Warung Bu yuni","registrationDate":1566733982013,"customerCount":0},"83815362015":{"ownerId":"83815362015","name":"nunu gamis","registrationDate":1566734015363,"customerCount":1},"81908977346":{"ownerId":"81908977346","name":"Toko Nunung","registrationDate":1566734596472,"customerCount":4},"85890157432":{"ownerId":"85890157432","name":"Warung sayur Nori","registrationDate":1566736161507,"customerCount":0},"89525926579":{"ownerId":"89525926579","name":"toko kue","registrationDate":1566739506335,"customerCount":2},"87870439792":{"ownerId":"87870439792","name":"Acc ","registrationDate":1566740656266,"customerCount":1},"87874707015":{"ownerId":"87874707015","name":"warung kekinian","registrationDate":1566741898655,"customerCount":2},"85813501008":{"ownerId":"85813501008","name":"Warung LaLaLa","registrationDate":1566746164761,"customerCount":1},"82110362981":{"ownerId":"82110362981","name":"warung sembako teh ntin","registrationDate":1566804465603,"customerCount":2},"87781061641":{"ownerId":"87781061641","name":"toko listrik gilang","registrationDate":1566809441925,"customerCount":0},"83819390826":{"ownerId":"83819390826","name":"ServisvHp","registrationDate":1566809987745,"customerCount":0},"8567511122":{"ownerId":"8567511122","name":"Sultan Toys","registrationDate":1566811312530,"customerCount":2},"81295605920":{"ownerId":"81295605920","name":"Toko Mainan","registrationDate":1566811745472,"customerCount":1},"81220370611":{"ownerId":"81220370611","name":"Dian motor","registrationDate":1566812699180,"customerCount":0},"81211348172":{"ownerId":"81211348172","name":"Servis elektronik","registrationDate":1566813175404,"customerCount":1},"895374683555":{"ownerId":"895374683555","name":"BAYO NASTI","registrationDate":1566815228730,"customerCount":1},"89688188232":{"ownerId":"89688188232","name":"bengkel jaya","registrationDate":1566816978510,"customerCount":0},"85773957216":{"ownerId":"85773957216","name":"putro cell","registrationDate":1566817194680,"customerCount":0},"87874158174":{"ownerId":"87874158174","name":"Suplayer bahan bangunan","registrationDate":1566873908574,"customerCount":1},"85777273324":{"ownerId":"85777273324","name":"Toko Grosir empat","registrationDate":1566892222611,"customerCount":2},"8557641381":{"ownerId":"8557641381","name":"Pedagang ikan hias","registrationDate":1566893488654,"customerCount":1},"85691694566":{"ownerId":"85691694566","name":"Warung Upi","registrationDate":1566894831529,"customerCount":0},"85861805310":{"ownerId":"85861805310","name":"Nabhan Digital","registrationDate":1566903460868,"customerCount":0},"89611475048":{"ownerId":"89611475048","name":"Tiara Paket","registrationDate":1566905433235,"customerCount":0},"89611475402":{"ownerId":"89611475402","name":"Warung Uhuy","registrationDate":1566905903795,"customerCount":0},"895355376522":{"ownerId":"895355376522","name":"Mila Cell69","registrationDate":1566906612505,"customerCount":3},"859102805839":{"ownerId":"859102805839","name":"warung nazwa","registrationDate":1566976059366,"customerCount":0},"85762124944":{"ownerId":"85762124944","name":"FASTPAY DEPOK","registrationDate":1566978962750,"customerCount":0},"89696705366":{"ownerId":"89696705366","name":"warung sembako bu opah","registrationDate":1566980565948,"customerCount":0},"81212779058":{"ownerId":"81212779058","name":"Mislan cell","registrationDate":1566981039444,"customerCount":1},"81511292529":{"ownerId":"81511292529","name":"Eric cellular","registrationDate":1566981243471,"customerCount":2},"81385901041":{"ownerId":"81385901041","name":"Trims motor","registrationDate":1566985559082,"customerCount":0},"81381809873":{"ownerId":"81381809873","name":"warkop-8","registrationDate":1566986264856,"customerCount":0},"81383467214":{"ownerId":"81383467214","name":" UD Harapan Jaya","registrationDate":1566987032246,"customerCount":0},"85691823004":{"ownerId":"85691823004","name":"kacang bumbu","registrationDate":1566987092745,"customerCount":0},"87855833965":{"ownerId":"87855833965","name":"setik pinggiran","registrationDate":1566987299435,"customerCount":0},"87780032892":{"ownerId":"87780032892","name":"Suplayer permen","registrationDate":1566994490402,"customerCount":1},"85693798739":{"ownerId":"85693798739","name":"grosir ikan hias RW EDDO","registrationDate":1566997987847,"customerCount":3},"81383151041":{"ownerId":"81383151041","name":"Toko Kelana Jaya","registrationDate":1567044994845,"customerCount":1},"85886811228":{"ownerId":"85886811228","name":"pedagang buah","registrationDate":1567045954756,"customerCount":1},"81383970990":{"ownerId":"81383970990","name":"yati pinjaman tunai","registrationDate":1567063035564,"customerCount":1},"81288589882":{"ownerId":"81288589882","name":"Toko spsrepart motor","registrationDate":1567069258721,"customerCount":0},"85210068500":{"ownerId":"85210068500","name":"warung santi","registrationDate":1567069797696,"customerCount":0},"8986183440":{"ownerId":"8986183440","name":"pedagang rumput","registrationDate":1567071634599,"customerCount":0},"895331251708":{"ownerId":"895331251708","name":"youmy cell","registrationDate":1567074729307,"customerCount":0},"89623856283":{"ownerId":"89623856283","name":"sembako makpak","registrationDate":1567077952503,"customerCount":0},"87741307586":{"ownerId":"87741307586","name":"kue cincin bi uum","registrationDate":1567079878313,"customerCount":0},"8889636325":{"ownerId":"8889636325","name":"sosis bakar naufal","registrationDate":1567086564524,"customerCount":0},"81211234750":{"ownerId":"81211234750","name":"hanifa shop","registrationDate":1567087990281,"customerCount":3},"85215573121":{"ownerId":"85215573121","name":"Desi toko baju","registrationDate":1567089528022,"customerCount":0},"83872464308":{"ownerId":"83872464308","name":"Toko sembako","registrationDate":1567127836310,"customerCount":1},"81292846019":{"ownerId":"81292846019","name":"abie cell","registrationDate":1567131175637,"customerCount":0},"81806899598":{"ownerId":"81806899598","name":"test","registrationDate":1567156876240,"customerCount":2},"85890152707":{"ownerId":"85890152707","name":"pedagang jeruk pasarparung","registrationDate":1567160621748,"customerCount":0},"87887754426":{"ownerId":"87887754426","name":"DG shop","registrationDate":1567161674277,"customerCount":1},"81910875269":{"ownerId":"81910875269","name":"Warung kopi teh noerma","registrationDate":1567174510628,"customerCount":1},"895411126616":{"ownerId":"895411126616","name":"warung bu ayati","registrationDate":1567225435982,"customerCount":2},"87770740227":{"ownerId":"87770740227","name":"Pedagang pakan dan burung\n burung","registrationDate":1567226172084,"customerCount":1},"85719228059":{"ownerId":"85719228059","name":"toko ganesha","registrationDate":1567228308209,"customerCount":0},"82111336402":{"ownerId":"82111336402","name":"Gina florist pamulang","registrationDate":1567230907940,"customerCount":11},"895372367827":{"ownerId":"895372367827","name":"Rujak umi jampang","registrationDate":1567235793864,"customerCount":1},"81286201001":{"ownerId":"81286201001","name":"mie nangroe aceh","registrationDate":1567236060992,"customerCount":2},"81513704693":{"ownerId":"81513704693","name":"warung ma'co","registrationDate":1567253296487,"customerCount":6},"82213844331":{"ownerId":"82213844331","name":"Alfioutfit","registrationDate":1567391831760,"customerCount":3},"81387730883":{"ownerId":"81387730883","name":"Noval Jaya","registrationDate":1567391875016,"customerCount":1},"88210299854":{"ownerId":"88210299854","name":"FIPO Culinary","registrationDate":1567391922122,"customerCount":3},"81808518094":{"ownerId":"81808518094","name":"Lely Colection","registrationDate":1567391970738,"customerCount":4},"81617337973":{"ownerId":"81617337973","name":"Mil2cake","registrationDate":1567392196524,"customerCount":2},"82111222182":{"ownerId":"82111222182","name":"Novie Cake & Bakery","registrationDate":1567392219312,"customerCount":6},"85776152315":{"ownerId":"85776152315","name":"\"YY\" kuliner ","registrationDate":1567392230392,"customerCount":5},"81283827040":{"ownerId":"81283827040","name":"B collection","registrationDate":1567392290395,"customerCount":1},"81282049231":{"ownerId":"81282049231","name":"pa pi yo","registrationDate":1567392298556,"customerCount":3},"81297211956":{"ownerId":"81297211956","name":"Narra warung","registrationDate":1567392306145,"customerCount":6},"8568333687":{"ownerId":"8568333687","name":"DELIAN","registrationDate":1567392310725,"customerCount":5},"89518110918":{"ownerId":"89518110918","name":"Meatza salad SaLiRik","registrationDate":1567392313217,"customerCount":24},"81289561123":{"ownerId":"81289561123","name":"warung Rin's","registrationDate":1567392319373,"customerCount":2},"81284139554":{"ownerId":"81284139554","name":"pempek shasha","registrationDate":1567392388032,"customerCount":2},"81287797007":{"ownerId":"81287797007","name":"bu ani","registrationDate":1567392424945,"customerCount":2},"89663300794":{"ownerId":"89663300794","name":"Bang Bejo","registrationDate":1567392444308,"customerCount":2},"85779087218":{"ownerId":"85779087218","name":"Coto makasar","registrationDate":1567392451259,"customerCount":4},"81287967010":{"ownerId":"81287967010","name":"toko hanan","registrationDate":1567392547445,"customerCount":2},"81380557090":{"ownerId":"81380557090","name":"Toko Fija","registrationDate":1567392583466,"customerCount":4},"82113181535":{"ownerId":"82113181535","name":"Zena Colection","registrationDate":1567392597917,"customerCount":15},"85715540736":{"ownerId":"85715540736","name":"naa numani","registrationDate":1567392681424,"customerCount":5},"89682743724":{"ownerId":"89682743724","name":"Warung Tina","registrationDate":1567392771510,"customerCount":11},"81319131488":{"ownerId":"81319131488","name":"bakso kaget, bebek dan sop ayam kampung Nyamleng","registrationDate":1567393685441,"customerCount":2},"82120623979":{"ownerId":"82120623979","name":"umi kichen","registrationDate":1567393770018,"customerCount":5},"81385395152":{"ownerId":"81385395152","name":"toko fashion seelook","registrationDate":1567393906470,"customerCount":0},"81296619322":{"ownerId":"81296619322","name":"Rety's ","registrationDate":1567394010168,"customerCount":0},"82113564261":{"ownerId":"82113564261","name":"piscokjen","registrationDate":1567395315307,"customerCount":2},"85772674688":{"ownerId":"85772674688","name":"esah corner","registrationDate":1567395910063,"customerCount":0},"8126975400":{"ownerId":"8126975400","name":"mie nanggroe aceh","registrationDate":1567406406448,"customerCount":1},"82213159437":{"ownerId":"82213159437","name":"DEMIN","registrationDate":1567409575404,"customerCount":1},"81318511370":{"ownerId":"81318511370","name":"YANTI","registrationDate":1567415199144,"customerCount":1},"895392861816":{"ownerId":"895392861816","name":"Meatza salad culinary","registrationDate":1567417815394,"customerCount":7},"81311139550":{"ownerId":"81311139550","name":"3f","registrationDate":1567433665601,"customerCount":9},"89635177132":{"ownerId":"89635177132","name":"fz bakery","registrationDate":1567446422521,"customerCount":1},"895372003523":{"ownerId":"895372003523","name":"vina shenavia","registrationDate":1567481264254,"customerCount":2},"81314561252":{"ownerId":"81314561252","name":"PİSCOKJEN","registrationDate":1567482828490,"customerCount":1},"8128706665":{"ownerId":"8128706665","name":"Toko sandal dan voecer","registrationDate":1567483947206,"customerCount":1},"85692712350":{"ownerId":"85692712350","name":"Rm.Mang Adang","registrationDate":1567484429465,"customerCount":1},"85892620693":{"ownerId":"85892620693","name":"RM. Amanah","registrationDate":1567485323304,"customerCount":2},"8126751960":{"ownerId":"8126751960","name":"RM.padang amanah","registrationDate":1567486488456,"customerCount":1},"81382170309":{"ownerId":"81382170309","name":"prima phone","registrationDate":1567492605438,"customerCount":1},"85718142140":{"ownerId":"85718142140","name":"Pengepul rongsokab","registrationDate":1567496738396,"customerCount":2},"88976609318":{"ownerId":"88976609318","name":"rey store","registrationDate":1567504439780,"customerCount":1},"81220770042":{"ownerId":"81220770042","name":"mo_collection27","registrationDate":1567506205571,"customerCount":1},"89674469033":{"ownerId":"89674469033","name":"toko padawa 5 spartpart mobil","registrationDate":1567507042414,"customerCount":6},"87742642279":{"ownerId":"87742642279","name":"roti soek","registrationDate":1567507621428,"customerCount":1},"87888656412":{"ownerId":"87888656412","name":"Roti Soek Padjadjaran 2","registrationDate":1567507811546,"customerCount":3},"895636823294":{"ownerId":"895636823294","name":"sembako barokah","registrationDate":1567508034987,"customerCount":0},"81315983749":{"ownerId":"81315983749","name":"Fadhail sport","registrationDate":1567508713391,"customerCount":8},"87750683784":{"ownerId":"87750683784","name":"Amanah toko","registrationDate":1567509980102,"customerCount":0},"82123705575":{"ownerId":"82123705575","name":"toko sabun","registrationDate":1567514740810,"customerCount":1},"81293735085":{"ownerId":"81293735085","name":"Mermaidia's English Course","registrationDate":1567517328284,"customerCount":0},"81280078909":{"ownerId":"81280078909","name":"AzzaM Cell","registrationDate":1567524821134,"customerCount":2},"81361666412":{"ownerId":"81361666412","name":"Fastpay Akbar Cell","registrationDate":1567562196214,"customerCount":1},"81389252093":{"ownerId":"81389252093","name":"Arkan cell","registrationDate":1567562661119,"customerCount":1},"89636398497":{"ownerId":"89636398497","name":"Faiz online shop","registrationDate":1567567738698,"customerCount":1},"81779074729":{"ownerId":"81779074729","name":"sumber rejeki","registrationDate":1567568162208,"customerCount":2},"89665520001":{"ownerId":"89665520001","name":"Azzahra","registrationDate":1567572310154,"customerCount":0},"85710116888":{"ownerId":"85710116888","name":"Biro jasa","registrationDate":1567572550428,"customerCount":1},"82123894203":{"ownerId":"82123894203","name":"elastomer nusindo","registrationDate":1567576470614,"customerCount":1},"89614956007":{"ownerId":"89614956007","name":"kredit alat kecantikan","registrationDate":1567579913403,"customerCount":1},"81289550572":{"ownerId":"81289550572","name":"global prima grafika","registrationDate":1567581424134,"customerCount":2},"89687315944":{"ownerId":"89687315944","name":"vica allshop","registrationDate":1567591027314,"customerCount":3},"87874561044":{"ownerId":"87874561044","name":"Mbah Martimbang","registrationDate":1567603764209,"customerCount":1},"85776898682":{"ownerId":"85776898682","name":"Warung bi Ati","registrationDate":1567646905121,"customerCount":5},"89638375035":{"ownerId":"89638375035","name":"Ratu cooker","registrationDate":1567662957877,"customerCount":0},"87780208007":{"ownerId":"87780208007","name":"ikan asin zaki ciseeng","registrationDate":1567667692247,"customerCount":2},"89504921645":{"ownerId":"89504921645","name":"dims w","registrationDate":1567668765050,"customerCount":0},"82110284102":{"ownerId":"82110284102","name":"Queen Chayra ","registrationDate":1567669139496,"customerCount":4},"89617320118":{"ownerId":"89617320118","name":"dapur intan kichenset","registrationDate":1567671591650,"customerCount":1},"85881551215":{"ownerId":"85881551215","name":"bella mandiri","registrationDate":1567674118024,"customerCount":1},"89657639667":{"ownerId":"89657639667","name":"Bakso Tunggal","registrationDate":1567674664336,"customerCount":2},"89638271369":{"ownerId":"89638271369","name":"sembako sakila","registrationDate":1567675043090,"customerCount":1},"895335416767":{"ownerId":"895335416767","name":"ajay cell","registrationDate":1567676056971,"customerCount":1},"8159831716":{"ownerId":"8159831716","name":"wardev (warung deva)","registrationDate":1567684230499,"customerCount":11},"85720911477":{"ownerId":"85720911477","name":"kita","registrationDate":1567685147763,"customerCount":0},"82112635119":{"ownerId":"82112635119","name":"kredit emas","registrationDate":1567702204793,"customerCount":5},"87870066655":{"ownerId":"87870066655","name":"Nissa snack","registrationDate":1567734459563,"customerCount":1},"85711484820":{"ownerId":"85711484820","name":"deliza","registrationDate":1567748130835,"customerCount":1},"81318269735":{"ownerId":"81318269735","name":"eric cell","registrationDate":1567754510749,"customerCount":5},"85945835090":{"ownerId":"85945835090","name":"Ladifa bubble drink","registrationDate":1567754598367,"customerCount":1},"82225611699":{"ownerId":"82225611699","name":"NAB-NAB","registrationDate":1567754799044,"customerCount":1},"81287553111":{"ownerId":"81287553111","name":"Alya shop","registrationDate":1567755244370,"customerCount":1},"81282841595":{"ownerId":"81282841595","name":"gapoktan","registrationDate":1567755654436,"customerCount":1},"85280121871":{"ownerId":"85280121871","name":"FIZKA JUS REMPAH","registrationDate":1567756948708,"customerCount":2},"83811061722":{"ownerId":"83811061722","name":"herbaplant","registrationDate":1567759886738,"customerCount":2},"87764745878":{"ownerId":"87764745878","name":"Mama Icha Olshop","registrationDate":1567759971468,"customerCount":5},"81291465152":{"ownerId":"81291465152","name":"Nasi Goreng rasa Rindu","registrationDate":1567779178210,"customerCount":1},"87789434354":{"ownerId":"87789434354","name":"bonymart","registrationDate":1567786372578,"customerCount":1},"87785476463":{"ownerId":"87785476463","name":"meatza salirik salad","registrationDate":1567819554312,"customerCount":0},"85289723687":{"ownerId":"85289723687","name":" WARUNG ATM","registrationDate":1567827769371,"customerCount":6},"89694945338":{"ownerId":"89694945338","name":"Distro xtreme","registrationDate":1567828249064,"customerCount":1},"87870851337":{"ownerId":"87870851337","name":"kantin inces","registrationDate":1567831970304,"customerCount":2},"82125330100":{"ownerId":"82125330100","name":"walacatchy","registrationDate":1567843495985,"customerCount":1},"89614216850":{"ownerId":"89614216850","name":"milla cell69","registrationDate":1567847184172,"customerCount":1},"85886175370":{"ownerId":"85886175370","name":"mie ayam barokah","registrationDate":1567848698798,"customerCount":1},"87872137055":{"ownerId":"87872137055","name":"Toko baju GAYA BUSANA PARUNG","registrationDate":1567851326249,"customerCount":2},"87774442954":{"ownerId":"87774442954","name":"Dean cell","registrationDate":1567852131026,"customerCount":2},"81283243458":{"ownerId":"81283243458","name":"afifah fashion","registrationDate":1567852262566,"customerCount":2},"83877684975":{"ownerId":"83877684975","name":"delfi parfume","registrationDate":1567853610506,"customerCount":0},"83811727782":{"ownerId":"83811727782","name":"atharclothes18","registrationDate":1567857053598,"customerCount":1},"89611391282":{"ownerId":"89611391282","name":"kosmetik Rin rin","registrationDate":1567857522092,"customerCount":1},"8972451291":{"ownerId":"8972451291","name":"konjen cell","registrationDate":1567879701342,"customerCount":2},"85881678003":{"ownerId":"85881678003","name":"part murah","registrationDate":1567882194713,"customerCount":0},"81212166699":{"ownerId":"81212166699","name":"BiangCrab","registrationDate":1567882400626,"customerCount":0},"8114801971":{"ownerId":"8114801971","name":"saputra","registrationDate":1567908166775,"customerCount":1},"83879954629":{"ownerId":"83879954629","name":"saung kuring","registrationDate":1567913713342,"customerCount":2},"85893777107":{"ownerId":"85893777107","name":"Triutama","registrationDate":1567988607146,"customerCount":0},"8119959952":{"ownerId":"8119959952","name":"Kidokado","registrationDate":1567992105103,"customerCount":3},"81320599115":{"ownerId":"81320599115","name":"Ice cream","registrationDate":1567993409922,"customerCount":0},"81398039884":{"ownerId":"81398039884","name":"sup iga baru","registrationDate":1568001702246,"customerCount":0},"82111915101":{"ownerId":"82111915101","name":"ALIFA COMPUTER","registrationDate":1568026027792,"customerCount":1},"85780732760":{"ownerId":"85780732760","name":"ALIFA COMP","registrationDate":1568026236180,"customerCount":0},"85781480261":{"ownerId":"85781480261","name":"toko sinarmas","registrationDate":1568027085158,"customerCount":1},"87874945757":{"ownerId":"87874945757","name":"dayung white coffee","registrationDate":1568028242895,"customerCount":0},"82311549390":{"ownerId":"82311549390","name":"putra pasaman","registrationDate":1568029132288,"customerCount":6},"81808842503":{"ownerId":"81808842503","name":"badriah","registrationDate":1568034198062,"customerCount":0},"89687168101":{"ownerId":"89687168101","name":"diyan cell","registrationDate":1568042913012,"customerCount":1},"8986759392":{"ownerId":"8986759392","name":"pengeluaran","registrationDate":1568048242660,"customerCount":0},"9183242366":{"ownerId":"9183242366","name":"warung","registrationDate":1568054306879,"customerCount":0},"81290788782":{"ownerId":"81290788782","name":"akila","registrationDate":1568069127570,"customerCount":1},"87848617314":{"ownerId":"87848617314","name":"Hery Jaya","registrationDate":1568077209495,"customerCount":1},"85715978359":{"ownerId":"85715978359","name":"wartoy","registrationDate":1568081532799,"customerCount":1},"81299474317":{"ownerId":"81299474317","name":"SOTO MIE BABEH","registrationDate":1568084033664,"customerCount":2},"81282611670":{"ownerId":"81282611670","name":"Nadifa store Parung","registrationDate":1568084887518,"customerCount":1},"85378888879":{"ownerId":"85378888879","name":"88LARISJAYA99","registrationDate":1568086856054,"customerCount":0},"82183330933":{"ownerId":"82183330933","name":"PRIO CELL 2020","registrationDate":1568087673999,"customerCount":32},"8992871940":{"ownerId":"8992871940","name":"BOYPONSEL","registrationDate":1568088803278,"customerCount":4},"82389485970":{"ownerId":"82389485970","name":"Asa cell","registrationDate":1568089244468,"customerCount":0},"81212481748":{"ownerId":"81212481748","name":"basnea","registrationDate":1568090316835,"customerCount":1},"81333602345":{"ownerId":"81333602345","name":"marem caffe","registrationDate":1568090485804,"customerCount":0},"81298232247":{"ownerId":"81298232247","name":"Home Industri tempe parung","registrationDate":1568090516160,"customerCount":1},"81395779912":{"ownerId":"81395779912","name":"Satria ","registrationDate":1568090676250,"customerCount":0},"85814230999":{"ownerId":"85814230999","name":"aji","registrationDate":1568094406068,"customerCount":0},"8998775144":{"ownerId":"8998775144","name":"Dinasty","registrationDate":1568094655102,"customerCount":1},"89622298704":{"ownerId":"89622298704","name":"sari barokah","registrationDate":1568096057349,"customerCount":1},"85743874934":{"ownerId":"85743874934","name":"Warung PDC","registrationDate":1568096559955,"customerCount":0},"81214399799":{"ownerId":"81214399799","name":"kantin riskita","registrationDate":1568098157464,"customerCount":1},"85377559936":{"ownerId":"85377559936","name":"rita","registrationDate":1568099272628,"customerCount":0},"85280240140":{"ownerId":"85280240140","name":"sultan","registrationDate":1568100596483,"customerCount":0},"81341289931":{"ownerId":"81341289931","name":"Vans cell","registrationDate":1568101074105,"customerCount":7},"81212132120":{"ownerId":"81212132120","name":"MEKAR JAYA LAYANGAN","registrationDate":1568101183687,"customerCount":1},"81297679496":{"ownerId":"81297679496","name":"sahabat","registrationDate":1568101297010,"customerCount":1},"82157445139":{"ownerId":"82157445139","name":"Usaha Bersama\nusaha bersama","registrationDate":1568105316182,"customerCount":2},"88213101518":{"ownerId":"88213101518","name":"linashop","registrationDate":1568106469730,"customerCount":0},"895636852171":{"ownerId":"895636852171","name":"F1 laundry","registrationDate":1568106871080,"customerCount":1},"81395129653":{"ownerId":"81395129653","name":"Mulai Jualan ( KayaBerjamaah )","registrationDate":1568106886363,"customerCount":0},"85319240112":{"ownerId":"85319240112","name":"dealer yamaha mekar motor","registrationDate":1568107263075,"customerCount":2},"85811818220":{"ownerId":"85811818220","name":"AHMAD CELLULER","registrationDate":1568108157209,"customerCount":2},"81268921220":{"ownerId":"81268921220","name":"fhoto copy aqilla","registrationDate":1568109319159,"customerCount":1},"8815924630":{"ownerId":"8815924630","name":"TOKO AHMAD CELLULER","registrationDate":1568109941179,"customerCount":2},"83872738843":{"ownerId":"83872738843","name":"warung aqila","registrationDate":1568111769635,"customerCount":0},"895343079215":{"ownerId":"895343079215","name":"Baso Priangan","registrationDate":1568113513284,"customerCount":1},"81288306030":{"ownerId":"81288306030","name":"galerytuppy","registrationDate":1568121848503,"customerCount":0},"87853165108":{"ownerId":"87853165108","name":"warung desghina","registrationDate":1568124307670,"customerCount":1},"83804474786":{"ownerId":"83804474786","name":"cemerlang cell","registrationDate":1568128063513,"customerCount":1},"85335163703":{"ownerId":"85335163703","name":"Achank Ghina Collection","registrationDate":1568128396321,"customerCount":2},"81329343871":{"ownerId":"81329343871","name":"Modjo_coffee ","registrationDate":1568158253909,"customerCount":2},"85842539586":{"ownerId":"85842539586","name":"tambal ban panggilan","registrationDate":1568165724904,"customerCount":0},"82320404442":{"ownerId":"82320404442","name":"Loket Adreena","registrationDate":1568165789258,"customerCount":1},"87779990971":{"ownerId":"87779990971","name":"toko budi \ntoko budi","registrationDate":1568166921994,"customerCount":0},"82338065772":{"ownerId":"82338065772","name":"satria cell","registrationDate":1568167015140,"customerCount":0},"85741958777":{"ownerId":"85741958777","name":"family cell","registrationDate":1568167112506,"customerCount":0},"89655983738":{"ownerId":"89655983738","name":"gbi","registrationDate":1568168133046,"customerCount":0},"85108279777":{"ownerId":"85108279777","name":"Warkos","registrationDate":1568168441058,"customerCount":0},"82256355059":{"ownerId":"82256355059","name":"Oesah Kieta","registrationDate":1568168929237,"customerCount":1},"82224163330":{"ownerId":"82224163330","name":"k.U.a","registrationDate":1568169006095,"customerCount":0},"8997167129":{"ownerId":"8997167129","name":"Pandhu cell","registrationDate":1568169700517,"customerCount":10},"81802944500":{"ownerId":"81802944500","name":"Warnas Bu Udin","registrationDate":1568169810915,"customerCount":0},"8114785377":{"ownerId":"8114785377","name":"Warung Rifky","registrationDate":1568170454957,"customerCount":0},"85289591200":{"ownerId":"85289591200","name":"wati","registrationDate":1568173363619,"customerCount":0},"83162101811":{"ownerId":"83162101811","name":"Waroeng Pulsa","registrationDate":1568175162682,"customerCount":0},"81289215537":{"ownerId":"81289215537","name":"dhika","registrationDate":1568176313824,"customerCount":0},"87828878000":{"ownerId":"87828878000","name":"Toko Devindra","registrationDate":1568177070215,"customerCount":0},"8568899232":{"ownerId":"8568899232","name":"TCL","registrationDate":1568177753020,"customerCount":0},"85697889449":{"ownerId":"85697889449","name":"MISSIN FURNITURE FINANCE\" Terima Kasih Telah Berbelanjan di Toko Kami\" 🙏","registrationDate":1568179129269,"customerCount":24},"87870135796":{"ownerId":"87870135796","name":"Toko Sehat","registrationDate":1568181915548,"customerCount":3},"81262928109":{"ownerId":"81262928109","name":"Amalia","registrationDate":1568182965448,"customerCount":0},"85814090677":{"ownerId":"85814090677","name":"Warung Makan mak Sri","registrationDate":1568183002083,"customerCount":1},"81287885190":{"ownerId":"81287885190","name":"MEGABISNIS","registrationDate":1568183234143,"customerCount":1},"85703627884":{"ownerId":"85703627884","name":"Aditya cell","registrationDate":1568183349050,"customerCount":1},"85891502723":{"ownerId":"85891502723","name":"Berutu Travel","registrationDate":1568183376427,"customerCount":1},"89514560081":{"ownerId":"89514560081","name":"Na mulyana","registrationDate":1568184411327,"customerCount":0},"89655775775":{"ownerId":"89655775775","name":"Fatih Decoration","registrationDate":1568186255546,"customerCount":1},"85930294666":{"ownerId":"85930294666","name":"Herry Motor","registrationDate":1568189102941,"customerCount":2},"81270921175":{"ownerId":"81270921175","name":"Rosenbergi","registrationDate":1568189924462,"customerCount":4},"82123234337":{"ownerId":"82123234337","name":"ANDI ACCECORIS","registrationDate":1568190411592,"customerCount":2},"81385045516":{"ownerId":"81385045516","name":"ASSEH LAUK","registrationDate":1568191110935,"customerCount":1},"85217286142":{"ownerId":"85217286142","name":"warung Roko bang edy","registrationDate":1568191962135,"customerCount":1},"8558732354":{"ownerId":"8558732354","name":"WARUNG SEMBAKO IBU TATI","registrationDate":1568194955162,"customerCount":3},"89637366016":{"ownerId":"89637366016","name":"asra_sirait","registrationDate":1568195543797,"customerCount":0},"81933170369":{"ownerId":"81933170369","name":"martabak pagi","registrationDate":1568195614439,"customerCount":0},"85244011088":{"ownerId":"85244011088","name":"ARJUNA CELL","registrationDate":1568198159307,"customerCount":0},"81212162456":{"ownerId":"81212162456","name":"warkop simas","registrationDate":1568207434746,"customerCount":1},"895345298273":{"ownerId":"895345298273","name":"warung nasi intan","registrationDate":1568208834768,"customerCount":1},"89627366077":{"ownerId":"89627366077","name":"warung mika","registrationDate":1568210496055,"customerCount":4},"81369024421":{"ownerId":"81369024421","name":"hany&fiki","registrationDate":1568214302362,"customerCount":0},"88801118487":{"ownerId":"88801118487","name":"pt prambanan mulia agung","registrationDate":1568219070386,"customerCount":1},"81281272938":{"ownerId":"81281272938","name":"@lle@","registrationDate":1568230478492,"customerCount":0},"8567615161":{"ownerId":"8567615161","name":"LANJAR JAYA","registrationDate":1568261396317,"customerCount":1},"87721992438":{"ownerId":"87721992438","name":"Eksperiment Motor","registrationDate":1568262132500,"customerCount":1},"81386475500":{"ownerId":"81386475500","name":"ilham cell","registrationDate":1568263112245,"customerCount":2},"85921211055":{"ownerId":"85921211055","name":"warung bu Ratu","registrationDate":1568263518602,"customerCount":1},"81290175519":{"ownerId":"81290175519","name":"MELLA SALON","registrationDate":1568272518543,"customerCount":2},"8551848549":{"ownerId":"8551848549","name":"Warung mamah Nijam","registrationDate":1568277142350,"customerCount":2},"895345471588":{"ownerId":"895345471588","name":"Warung Zahra","registrationDate":1568278604543,"customerCount":1},"85693336910":{"ownerId":"85693336910","name":"MAIL MARBUN","registrationDate":1568280283060,"customerCount":2},"81311052595":{"ownerId":"81311052595","name":"Kios buah pamulang","registrationDate":1568280595682,"customerCount":1},"89614700076":{"ownerId":"89614700076","name":"didihome","registrationDate":1568280818896,"customerCount":6},"85715141229":{"ownerId":"85715141229","name":"Toko Sembako AlunaBW002GN","registrationDate":1568287107746,"customerCount":2},"85694119510":{"ownerId":"85694119510","name":"gh","registrationDate":1568294160763,"customerCount":0},"87750962242":{"ownerId":"87750962242","name":"Warung sehati","registrationDate":1568300757208,"customerCount":0},"85274933011":{"ownerId":"85274933011","name":"6g","registrationDate":1568301580572,"customerCount":0},"87848504517":{"ownerId":"87848504517","name":"WARUNG MAK RUKANAH","registrationDate":1568303466234,"customerCount":7},"88217421366":{"ownerId":"88217421366","name":"Usahaku","registrationDate":1568304169329,"customerCount":0},"85384703332":{"ownerId":"85384703332","name":"Dirman,Masya Allah","registrationDate":1568304548334,"customerCount":5},"82232996673":{"ownerId":"82232996673","name":"Griya cetak","registrationDate":1568304995317,"customerCount":0},"85245868917":{"ownerId":"85245868917","name":"maydia karunia","registrationDate":1568305182801,"customerCount":0},"81223646919":{"ownerId":"81223646919","name":"PT AL AYUBI","registrationDate":1568305559503,"customerCount":0},"89687281281":{"ownerId":"89687281281","name":"minzes","registrationDate":1568305750532,"customerCount":0},"82228821982":{"ownerId":"82228821982","name":"jendral pulsa","registrationDate":1568307691806,"customerCount":0},"85784288769":{"ownerId":"85784288769","name":"3C_PULSA","registrationDate":1568307787248,"customerCount":2},"82112184858":{"ownerId":"82112184858","name":"warung helga","registrationDate":1568308844141,"customerCount":1}}
}
