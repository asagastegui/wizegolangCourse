
async function getTomorrowWeatherAt(location, axios) {
  const { WEATHER_KEY } = process.env;
  return axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${location}&days=1&aqi=no&alerts=no`
  );
}

module.exports = {
  getTomorrowWeatherAt,
};
