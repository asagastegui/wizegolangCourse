require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.APP_PORT;

const weather = require("./weather");
const helloWorld = require("./helloWorld");
const axios = require("axios").default;

app.use(express.json());

app.get("/", (_req, res) => {
  const resp = helloWorld.helloWorld();
  res.send(resp);
});

app.get("/weather/:location", async (req, res) => {
  const { location } = req.params;
  try {
    const resp = await weather.getTomorrowWeatherAt(location, axios);
    res.json(resp.data);
  } catch (err) {
    res.status(400).json({
      err: err.response.data.error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
