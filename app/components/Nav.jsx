var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', backgroundColor: 'yellow'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold', backgroundColor: 'yellow'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold', backgroundColor: 'yellow'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;