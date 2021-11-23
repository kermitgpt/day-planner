var currentDay = document.getElementById("currentDay");

currentDay.append(moment());

var determineTime = moment().hour();

console.log(determineTime);

var textArea = document.getElementsByClassName("text-area");
var saveBtn = document.getElementsByClassName("saveBtn");

console.log(textArea);
console.log(saveBtn);
