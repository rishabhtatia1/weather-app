const forecast = require("./utils/forecast");
const geoCodeData = require("./utils/geocode");
const address = process.argv[2];
if (!address) {
  console.log("Please provide an address");
} else {
  geoCodeData(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("ERROR", error);
    }
    forecast(latitude, longitude, (error, forcastData) => {
      if (error) {
        return console.log("ERROR", error);
      }
      console.log("Location", location);
      console.log(forcastData);
    });
  });
}
