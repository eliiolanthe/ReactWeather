var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

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

    this.setState({
      isLoading: true,
      errorMsg: undefined
    });

    //debugger;

    OpenWeatherMap.getTemp(loc).then(function(temp) {
      that.setState({
        loc: loc,
        temp: temp,
        isLoading: false
      });
    }, function(err) { //e
      that.setState({
        isLoading: false,
        errorMsg: err.message
      });
    });
  },

  render: function(){
    /*
    var temp = this.state.temp + ' temp',
        location = this.state.loc;
    */
    var {isLoading, temp, loc, errorMsg} = this.state;

    function renderMsg() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && loc) {
        return <WeatherMessage temp={temp} location={loc}></WeatherMessage>;
      }
    }

    function renderError() {
      console.log('in renderError:' + typeof errorMsg);
      if (typeof errorMsg === 'string') {
        return (
          <ErrorModal message={errorMsg}/>
        );
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderMsg()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;