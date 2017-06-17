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
      <h3>About Component</h3>
  );
}

module.exports = About;