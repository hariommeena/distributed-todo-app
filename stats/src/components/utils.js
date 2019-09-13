import moment from 'moment'

const colorList = {
  "timeline": "#C0392B"
};


export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function releaseTypes(){
  return ["Internal Release"]
}

export function readableDateTime(v){
  let m = moment(new Date(Number(v)), 'Do MMM, YYYY h:mm a')
  return m.format('Do MMM, YYYY h:mm a')
}

export function releaseJudgementServices(){
  return ["ac-ebm"]
}

export function dashboardApiBaseUrl() {
  return "https://api-dashboard.ebm-dev.worksap.com/"
}

export function grafanaServerUrl() {
  return "http://18.139.36.227:3000/d/"
}

export function getColor(app) {
  return colorList[app] != undefined ? colorList[app] : "#17202A"
}

export function getColors(){
  return Object.values(colorList);
}

export function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}


export function extractMonth(date){
  return moment(date).format('YYYY-MM');
}

export function extractDay(date){
  return moment(date).format('DD');
}

export function formatMonth(date, subtractDays) {
  if(subtractDays && subtractDays > 0){
    date.setDate(date.getDate() - subtractDays);
  }
  return moment(date).format('YYYY-MM');
}


export function formatDayOnly(date, subtractDays) {
  if(subtractDays && subtractDays > 0){
    date.setDate(date.getDate() - subtractDays);
  }
  return moment(date).format('DD');
}

export function getCurrentHourSpan(daily){
  let limitStart = 10;
  let limitEnd = 20;

  let date = new Date();
  let startHour = parseInt(moment(date).format('HH'));
  let endHour = startHour + 1;

  if(daily){
    startHour = Math.max(startHour, limitStart);
    endHour = Math.min(endHour, limitEnd);
  }

  let item = {};
  item.name = startHour + ":00-" + endHour + ":00";

  if (startHour < 10) {
    item.value = '0' + startHour + ":00";
  } else {
    item.value = startHour + ":00";
  }
  return item;
}

export function format2digit(data){
  if(data < 10) {
    return '0' + data;
  }
  return "" + data;
}
