var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var temp = this.props.temp,
        location = this.props.location;
    return (
      <div>
        <p className="text-center">It is {temp} in {location}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;