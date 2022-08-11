const API_KEY = "3b9f9dab5de52a5498da660f5adfe008";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
  console.log(url);
}
function onGeoError() {
  alert(`Can't find you. No ewather for you.`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
