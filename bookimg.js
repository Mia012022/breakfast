const en = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'yyyy/MM/dd',
    timeFormat: 'hh:mm aa',
    firstDay: 0
}

var minDate1 = new Date();
var minDate2 = new Date();
let x = minDate1.getDay();
console.log(x);
let week = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];
console.log(week[x]);
minDate1.setDate(minDate1.getDate() + 1);
minDate2.setDate(minDate2.getDate() + 29);
const datepicker = new AirDatepicker('#myDatepicker', {
    locale: en, // Set language
    firstDay: 1,
    selectedDates: minDate1,
    minDate: minDate1,//最小日期
    maxDate: minDate2 //最大日期

})



const printCurrentTime = () => {
    console.log(datepicker.selectedDates) // print selected date
};