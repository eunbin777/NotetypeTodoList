const weather = document.querySelector(".weather_content span:first-child");
const city = document.querySelector(".weather_content span:last-child");
const API_KEY = "7aac8af350d1a18daa2a8dc3f61646e0";

function OnGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        });
}

function OnGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(OnGeoOk, OnGeoError);