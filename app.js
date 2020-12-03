const express = require("express");
const fetch = require("node-fetch");
const { response } = require("express");
const { request } = require("http");
const app = express();
require("dotenv").config();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/client"));

app.get("/weather/:latlong", async (req, res) => {
  const api_key = process.env.API_KEY;
  const latlong = req.params.latlong.split(",");
  const lat = latlong[0];
  const long = latlong[1];
  const api_url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${api_key}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
