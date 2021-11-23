var currentDay = document.getElementById("currentDay");

currentDay.append(moment());

var determineTime = moment().hour();

console.log(determineTime);

var textArea = $("textarea");
var saveBtn = $(".saveBtn");
