let name = prompt("Adınız Nedir?");
let clearName = name[0].toUpperCase() + name.substring(1);

const hiName = document.getElementById("myName");
hiName.innerText = clearName;

// day, month and year
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDate() {
  let date = new Date();

  let dayText = date.getDay();
  dayText = daysOfWeek[dayText];

  let numberDay = date.getDate();
  if (numberDay < 10) {
    numberDay = "0" + numberDay;
  }

  let month = date.getMonth();
  month = monthsOfYear[month];

  let year = date.getFullYear();

  // hour, minute and second
  let hour = date.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }

  let minute = date.getMinutes();
  if (minute < 10) {
  }

  let second = date.getSeconds();
  if (second < 10) {
    second = "0" + second;
  }

  // let clearDate = numberDay + " " + month + " " + year + " " + dayText;
  let clearDate = `${numberDay} ${month} ${year} ${dayText} <br/> ${hour}:${minute}:${second} `;

  // Date binding in DOM
  let dateDOM = document.getElementById("myClock");
  dateDOM.innerHTML = clearDate;
}

function eachSecondInterval() {
  setInterval(getDate, 1000);
  clearInterval(eachSecondInterval);
}

eachSecondInterval();
