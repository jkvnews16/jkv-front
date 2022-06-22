export default function dateFormat(zDate) {
  var date = new Date(zDate);
  var [month, day, year, hours, minutes] = [
    String(date.getMonth() + 1),
    String(date.getDate()),
    String(date.getFullYear()),
    String(date.getHours()),
    String(date.getMinutes()),
  ];
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  return "" + day + "/" + month + "/" + year + " " + hours + ":" + minutes;
}
