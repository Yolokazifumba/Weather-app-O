//display current day and timed

let time = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
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

let day = days[time.getDay()];
let date = time.getDate();
let month = months[time.getMonth()];
let hour = time.getHours();
let minutes = time.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hour.length < 2) {
  hour = `0${hour}`;
}

let today = document.querySelector("#current-time");
today.innerHTML = `${date} ${month} ${day} ${hour}:${minutes}`;

//change header(city) to user's search input
function searchCity(event) {
  event.preventDefault();

  let city = document.querySelector("h1");
  let newCity = document.querySelector("#input-field");
  city.innerHTML = newCity.value;

  return newCity.value;
}

let form = document.querySelector("#input-icon");
form.addEventListener("submit", searchCity);

//show temperature in different units (°C and °F)

let temp = document.querySelector("#temp");

function fahrenheits() {
  return Math.floor((18 * 9) / 5 + 32);
}

function tempC() {
  temp.innerHTML = "18";
}

function tempF(event) {
  event.preventDefault();
  temp.innerHTML = fahrenheits();
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", tempC);

let fenhereit = document.querySelector("#fenhereit");
fenhereit.addEventListener("click", tempF);

//let newCity = document.querySelector("#input-field");

/*let newCity = document.querySelector("#input-field").value;
newCity = newCity.value;


function showCity() {
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = newCity.value;
  axios.get(apiUrl).then(showTemp);
}


function showTemp(response) {
  let liveTemp = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp");
  temp.innerHTML = liveTemp;
}

let btn = document.querySelector("#input-icon");
btn.addEventListener("submit", showCity);*/
function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-field").value;
  search(city);
}

let searchForm = document.querySelector("#input-icon");
searchForm.addEventListener("submit", handleSubmit);

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

/*function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
  console.log(position)
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);*/
