if (!navigator.geolocation) {
  alert("app requires geolocation to be enabeled");
} else {
  navigator.geolocation.getCurrentPosition(async (position) => {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    const api_url = `weather/${lat},${lon}`;
    const response = await fetch(api_url);
    const json = await response.json();
    data = json;

    getElements = (attr) => {
      return document.querySelector(attr);
    };
    getAllElements = (attr) => {
      return document.querySelectorAll(attr);
    };

    const { current, hourly, daily, alerts } = data;
    console.log(data);

    //set some ui stuff for current locations current weather
    getElements("#current-temp").textContent = current.temp + " F";
    getElements("#current-wind").textContent = current.wind_speed + " MPH";
    getElements("#description").textContent = current.weather[0].description;
    getElements("h1").textContent = `Current Weather For ${name} ${lon}${lat}`;
    //loop api for extended forcast temp
    console.log(current.temp);
    for (let i = 0; i < daily.length; i++) {
      console.log(`daily temp ${daily[i].temp.day}`);
      console.log(`Hour temp ${hourly[i].temp}`);
    }
    getElements("#alert-text").textContent = alerts[0].description;
  });
}
