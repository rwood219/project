getElements = (attr) => document.querySelector(attr);

getAllElements = (attr) => document.querySelectorAll(attr);

//check for geolocation ande get json
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
    //set weather alert sidebar
    getElements("#alert-text").textContent = alerts[0].description;

    console.log(data);
    //set header
    getElements("h1").textContent = `Current Weather For ${timezone}`;

    //constructor for hourly forcast data
    function CreateNewHourForcastDiv(temp, wind, feelsLike) {
      this.temp = temp
      this.wind = wind
      this.feelsLike = feelsLike
      console.log(temp, wind, feelsLike)
    };

    for (let i = 0; i < hourly.length; i++) {
      hourlyData = hourly[i];
      new CreateNewHourForcastDiv(
        hourlyData.temp,
        hourlyData.wind_speed,
        hourlyData.feels_like
      )
    }
  })
};
