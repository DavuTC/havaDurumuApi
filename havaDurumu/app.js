const url = "https://api.openweathermap.org/data/2.5/";
const key = "d8ee854e05618ca6186a4a0eaffc52a0";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResults(searchBar.value);
  }
};

const getResults = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
};
const displayResults = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name},${result.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(result.main.temp)}<span>°c</span>`;
  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;
  let minMax = document.querySelector(".minmax");
  minMax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(
    result.main.temp_max
  )}°c`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
