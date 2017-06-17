var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=1650f2037f683b5cf1f86e997379e144';

module.exports = {
  getTemp: function(location) {
    var encodedLoc = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLoc}`;

    return axios.get(requestUrl).then(function(response) {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function() {
      // responding with 404, so response not used
      throw new Error('No city found');
    });
  }
}