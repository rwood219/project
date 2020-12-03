/* let long;
let lat;

if (!navigator.geolocation) {
  alert("geolocate required");
} else
  navigator.geolocation.getCurrentPosition((position) => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    //api key
    const apiKey = "7d60d961f40b12ba72fbcb6211117dd0";
    //current weather URL
    let currentWeatherApi = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;
    //extended forcast URL
    let oneCallWeatherApi = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;

    //shorten some code for selecting elements from dom
    getElements = (attr) => {
      return document.querySelector(attr);
    };
    getAllElements = (attr) => {
      return document.querySelectorAll(attr);
    };

    //Extended forcast data
    fetch(oneCallWeatherApi)
      .then((response) => response.json())
      .then((data) => {
        data = data;
        console.log(data);
        const { alerts, current, daily, hourly } = data;
        //loop api for extended forcast temp
        console.log(current.temp)
        for (let i = 0; i < daily.length; i++) {
          console.log(`daily temp ${daily[i].temp.day}`);
          console.log(`Hour temp ${hourly[i].temp}`);
        }
        getElements("#alert-text").textContent = alerts[0].description;
      });

    //fetch geoLocation url for current forcast
    fetch(currentWeatherApi)
      .then((response) => response.json())
      .then((data) => {
        data = data;
        const { name, coord, weather, wind, main } = data;
        console.log(data);
        //set some ui stuff for current locations current weather
        getElements("#current-temp").textContent = main.temp + " F";
        getElements("#current-wind").textContent = wind.speed + " MPH";
        getElements("#description").textContent = weather[0].description;
        getElements("h1").textContent = `Current Weather For ${name}`;
      });
 */
    //check for geolocation and get position return; JSON from api
    //need to hook up to app.js; this will replace some temp code above like fetch and api key etc..
    if (!navigator.geolocation) {
      alert("app requires geolocation to be enabeled");
    } else {
      navigator.geolocation.getCurrentPosition(async (position) => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        console.log(lon, lat);
        const api_url = `weather/${lat},${lon}`;
        const response = await fetch(api_url);
        const json = await response.json();
        data = json;


        console.log(data)
      });
    }
  
    //});
