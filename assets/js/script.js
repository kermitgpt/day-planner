var currentDay = document.getElementById("currentDay");

currentDay.append(moment());

var determineTime = moment().hour();

console.log(determineTime);

var textArea = document.querySelector(".text-area");
var saveBtn = document.querySelector(".container");

saveBtn.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    console.log(event.target.attributes[0].value);
    let inputId = event.target.attributes[0].value;
    let inputValue = document.getElementById(inputId).value;
    localStorage.setItem(inputId, inputValue);
  }
});

for (let i = 0; i < 9; i++) {
  document.getElementById("userText" + i).value = localStorage.getItem(
    "userText" + i
  );
  console.log(document.getElementById("userText" + i).attributes[0].value);
  if (
    parseInt(document.getElementById("userText" + i).attributes[2].value) <
    determineTime
  ) {
    document.getElementById("userText" + i).classList.add("past");
  } else if (
    parseInt(document.getElementById("userText" + i).attributes[2].value) ===
    determineTime
  ) {
    document.getElementById("userText" + i).classList.add("present");
  } else if (
    parseInt(document.getElementById("userText" + i).attributes[2].value) >
    determineTime
  ) {
    document.getElementById("userText" + i).classList.add("future");
  }
}
