    function displayTimeDay(){
      let now = new Date();
      let h4 = document.querySelector("h4");
      let hours = now.getHours();
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
      let day = days[now.getDay()];
        h4.innerHTML = day + ", " + hours + ":00";
    }
    displayTimeDay();

    function showTemperature(responce) {
      let descriptionElement = document.querySelector("#description");
        descriptionElement.innerHTML = responce.data.weather[0].description;
      let preciptionElement = document.querySelector("#perciption");
        preciptionElement.innerHTML = responce.data.rain + "%";
      let windspeedElement = document.querySelector("#windspeed");
        windspeedElement.innerHTML = responce.data.wind.speed + "mph";
      let weatherIconElement = document.querySelector("#icon");
        weatherIconElement.setAttribute("src", "http://openweathermap.org/img/wn/" + responce.data.weather[0].icon + "@2x.png");
        weatherIconElement.setAttribute("alt", responce.data.weather[0].description);
      // getting ℃ degree 
        celsiusTemperature = responce.data.main.temp;

      let getDegree = document.querySelector(".degree");
      let getTemp = Math.round(celsiusTemperature);
       getDegree.innerHTML = getTemp;
      // getting ALL weather data
        // console.log(responce.data);
    }

    function searchCity(event){
      event.preventDefault();
      let searchInput = document.querySelector("#search-text-input");
      let h1 = document.querySelector("h1");
        h1.innerHTML = searchInput.value;
      let apiKey = "09b098f13ff58f7d89c2ad3402c3b557";
      let city = searchInput.value;
      let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric";
        axios.get(apiUrl + "&appid=" + apiKey).then(showTemperature);
    }
    let form = document.querySelector("#search-form");
    form. addEventListener("submit", searchCity);

    function showFahrenheitTemperature(event) {
      event.preventDefault();
      celsiusLink.classList.remove("active")
      fahrenheitLink.classList.add("active")
      let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
      let temperatureElement = document.querySelector(".degree");
       temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    }
    let celsiusTemperature = null;

    let fahrenheitLink = document.querySelector("#switching-fahrenheit");
    fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

    function showcelsiusTemperature(event) {
      event.preventDefault();
      celsiusLink.classList.add("active")
      fahrenheitLink.classList.remove("active")
      let temperatureElement = document.querySelector(".degree");
      temperatureElement.innerHTML = Math.round(celsiusTemperature);

    }
    let celsiusLink = document.querySelector("#switching-celsius");
    celsiusLink.addEventListener("click", showcelsiusTemperature);