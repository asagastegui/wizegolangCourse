const assert = require("assert");
const helloWorld = require("../helloWorld").helloWorld;
const getTomorrowWeatherAt = require("../weather").getTomorrowWeatherAt;
describe("Hello World", function () {
  it("should return Hello world when called", function () {
    assert.equal(helloWorld(), "Hello, World");
  });
});

describe("Weather", function () {
    it("should return weather data..", async function () {
        const axios = {
            get: async () => {
                return {data: "weather data.."}
            }
        }
        const resp = await getTomorrowWeatherAt("Monterrey", axios)

      assert.equal(resp.data, "weather data..");
    });
    it("should thrown and get an error", async function () {
        const axios = {
            get: async () => {
                throw new Error("Error getting weather..")
            }
        }
        try { 
            await getTomorrowWeatherAt("Monterrey", axios)
        } catch(err) {
            assert.equal(err.message, "Error getting weather..");
        }
      
    });
  });