var React = require('react');

//only presentstional - can use as stateless funtional component 

/*
var About = React.createClass({
  render: function(){
    return (
        <h3>About Component</h3>
    );
  }
});
*/

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About Us</h1>
      <p>Welcome to the about page. This is some cool text about this project. </p>
      <p>Here are some of the tool used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JS framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather AMp</a> - Used to search for weather by city name
        </li>
      </ul>
    </div>
  );
}

module.exports = About;