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
      let degree = document.querySelector(".switching");
      let getTemp = Math.round(responce.data.main.temp);
      degree.innerHTML = getTemp + "℃";
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
    form. addEventListener("submit", searchCity)

    function switchingDegrees(event){
      event.preventDefault();
      let link = document.querySelector("a");
        if (link.textContent === "to℉") {
          link.innerHTML = "to℃";
        } else {
          link.innerHTML = "to℉";
        }
    }
    let convertDegree = document.querySelector("a")
    convertDegree.addEventListener("click", switchingDegrees);

    
   