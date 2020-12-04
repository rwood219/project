getElements = (attr) => {
  return document.querySelector(attr);
};
getAllElements = (attr) => {
  return document.querySelectorAll(attr);
};

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

    const { current, hourly, daily, alerts, timezone } = data;
    console.log(hourly);
    console.log(data);

    getElements("h1").textContent = `Current Weather For ${timezone}`;

    //function to set hour forcast info
    hourForcastData = (temp, wind, description) => {
      for (let i = 0; i < hourly.length; i++) {
        temp = hourly[i].temp;
        wind = hourly[i].wind_speed;
        description = hourly[i].weather[0].description;
        console.log(temp);
        console.log(wind);
        console.log(description);
      }
    };
    hourForcastData();

    //loop for hour forcast; most of this will be scraped
    for (let i = 0; i < 10; i++) {
      const { feels_like, temp, weather } = data.hourly[i];
      let hourDiv = document.createElement("div");
      hourDiv.textContent = `${temp}${"  "}${feels_like}`;
      getElements("#day-one").appendChild(hourDiv);
      console.log(weather[0].description);
      console.log(feels_like);
    }

    getElements("#alert-text").textContent = alerts[0].description;
  });
}
