var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=1650f2037f683b5cf1f86e997379e144
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  getDefaultProps: function() {
    return {
    };
  },

  handleSearch: function(loc) {
    var that = this;
    this.setState({isLoading: true});

    //debugger;

    OpenWeatherMap.getTemp(loc).then(function(temp) {
      that.setState({
        loc: loc,
        temp: temp,
        isLoading: false
      });
    }, function(errorMsg) {
      that.setState({isLoading: false});
      alert(errorMsg);
    });
  },

  render: function(){
    /*
    var temp = this.state.temp + ' temp',
        location = this.state.loc;
    */
    var {isLoading, temp, loc} = this.state;

    function renderMsg() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && loc) {
        return <WeatherMessage temp={temp} location={loc}></WeatherMessage>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMsg()}
      </div>
    );
  }
});

module.exports = Weather;