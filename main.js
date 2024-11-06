let form = document.querySelector("form");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let p = document.querySelector("p");
let input = document.querySelector("input");
let weatherCard = document.querySelector("#weather-card");

const fetchWeather = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=53bfe13598b6452c981131953241006&q=${input.value}&aqi=yes`
    );
    const data = await response.json();
    weatherCard.className = "card p-4 rounded-0 shadow-lg my-3";
    h1.innerText = data.current.temp_c;
    h2.innerText = data.location.name;
    p.innerText = data.current.condition.text;
    img.setAttribute("src", data.current.condition.icon);
  } catch (error) {
    window.alert("Invalid City Name");
  }

  form.reset();
};

form.addEventListener("submit", fetchWeather);
