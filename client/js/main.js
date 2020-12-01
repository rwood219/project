let long;
let lat;

//api key
const apiKey = "";

//fetch geoLocation url
fetch(
  `http://api.openweathermap.org/data/2.5/weather?lat=39.3425259&lon=-74.4710183999&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => console.log(data));

  //fetch example api url
fetch(
  `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => console.log(data));

//check for geolocation and get position return; JSON from api
if (!navigator.geolocation) {
  alert("app requires geolocation to be enabeled");
} else {
  navigator.geolocation.getCurrentPosition(async (position) => {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    console.log(lon, lat);
    const api_url = `weather/${lat},${long}`;
    const response = await fetch(api_url);
    const json = await response.json();
    console.log(json);
  });
}
