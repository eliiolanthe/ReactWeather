var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    var loc = this.refs.location.value;

    if (loc.length) {
      this.refs.location.value = '';
      this.props.onSearch(loc); // parent fn
    }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Enter city name" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;