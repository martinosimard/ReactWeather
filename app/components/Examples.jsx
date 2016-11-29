var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">Examples Component</h1>
    <p>Here are a few example lcoations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Quebec City'>Quebec City, QC</Link>
      </li>
      <li>
        <Link to='/?location=Ottawa'>Ottawa, ON</Link>
      </li>
    </ol>
    </div>
  )
};

module.exports = Examples;
